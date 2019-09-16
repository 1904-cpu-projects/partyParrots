import React, { Component } from 'react';
import Axios from 'axios';
import Item from '../Item/ItemDumb';

class TransactionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: false,
      items: [],
    };
  }

  getItems = async () => {
    try {
      if (this.state.items.length) {
        return true;
      }

      const { data: items } = await Axios.get(
        `api/orders/${this.props.transaction.id}/items`
      );

      this.setState(state => ({ ...state, items }));

      return true;
    } catch (error) {
      console.error(error);
    }
  };

  toggleShowItems = _ =>
    this.setState(state => ({ ...state, showItems: !state.showItems }));

  show = async () => {
    try {
      await this.getItems();
      this.toggleShowItems();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const transaction = this.props.transaction;

    return (
      <div
        className="box"
        key={transaction.purchaseDate}
        style={{ padding: '1.1em' }}
      >
        <p
          className="content has-text-centered"
          onClick={_ =>
            this.state.showItems ? this.toggleShowItems() : this.show()
          }
        >
          Purchased {new Date(transaction.purchaseDate).toDateString()}.
          {this.state.showItems ? ' Close.' : ' Show items.'}
        </p>

        {this.state.showItems && (
          <div className="list">
            {this.state.items.map(item => (
              <Item key={item.id} item={item} display={true} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TransactionCard;
