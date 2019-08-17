import React, { Fragment, Component } from 'react';
import TransactionCard from './Transaction';

class Transactions extends Component {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title">Past Transactions</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {this.props.transactions.map(transaction => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
            {!this.props.transactions.length && (
              <div className="box subtitle has-text-centered">
                None. You gotta drink more!!!
              </div>
            )}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Transactions;
