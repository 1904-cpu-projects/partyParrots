import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import Item from '../Item/Item';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  goToCheckout = () => {
    this.props.history.push('/checkout');
  };

  render() {
    const { items, makingRequest, total } = this.props;

    const renderEmpty = items.length === 0;
    const disableButton = renderEmpty || makingRequest;

    return (
      <Fragment>
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title">Cart</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <ul className="list">
              {renderEmpty ? (
                <li className="list-item has-text-centered">Empty Cart</li>
              ) : (
                items.map(item => <Item key={item.id} item={item} />)
              )}
              <li className="list-item has-text-centered">Total: {total}</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="field has-text-centered">
              <button
                className="button is-warning"
                type="button"
                disabled={disableButton}
                onClick={_ => this.goToCheckout()}
              >
                Checkout
              </button>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(ItemList);
