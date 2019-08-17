import { connect } from 'react-redux';
import Transactions from './TransactionsDumb';
import { getTransactions } from '../../actions/transactions';

const mapStateToProps = ({ transactions }) => ({
  transactions: transactions,
});

const mapDispatchToProps = dispatch => ({
  fetchTransactions() {
    dispatch(getTransactions());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
