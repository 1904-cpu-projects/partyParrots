import { connect } from 'react-redux';
import { cartTotalSelector } from '../../reducers/cartReducer';
import { getItems } from '../../actions/orderItems';
import ItemList from './ItemListDumb';

const mapDispatchToProps = dispatch => ({
  fetchItems() {
    dispatch(getItems());
  },
});

const mapStateToProps = state => {
  const { items, makingRequest } = state.cart;
  const user = state.user;

  return {
    items,
    makingRequest,
    total: cartTotalSelector(state),
    loggedIn: user.user && user.user.id,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
