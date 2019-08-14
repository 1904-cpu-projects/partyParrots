import { connect } from 'react-redux';
import DetailedProduct from './DetailedProductDumb';
import { makeItem } from '../../actions/orderItems';
import { inCartSelector } from '../../reducers/cartReducer';

const mapStateToProps = (state, { beverage }) => ({
  inCart: inCartSelector(beverage.id)(state),
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
