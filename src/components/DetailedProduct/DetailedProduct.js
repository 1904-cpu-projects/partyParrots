import { connect } from 'react-redux';
import DetailedProduct from './DetailedProductDumb';
import { makeItem, updateItem as _updateItem } from '../../actions/orderItems';
import { inCartSelector } from '../../reducers/cartReducer';

const mapStateToProps = state => ({
  inCart: inCartSelector(state) && true,
});

const mapDispatchToProps = (dispatch, { beverage }) => ({
  addToCart() {
    dispatch(
      makeItem({
        beverageId: beverage.id,
        purchasePrice: beverage.price,
        quantity: 1,
      })
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedProduct);
