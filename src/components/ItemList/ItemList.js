import { connect } from 'react-redux';
import { cartTotalSelector } from '../../reducers/cartReducer';
import ItemList from './ItemListDumb';

const mapStateToProps = state => {
  const { items, makingRequest } = state.cart;
  return {
    items,
    makingRequest,
    total: cartTotalSelector(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemList);
