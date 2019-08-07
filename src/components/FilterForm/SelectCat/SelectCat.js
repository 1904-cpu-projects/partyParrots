import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SelectCatDumb from './SelectCatDumb';
import { getBevs } from '../../../actions/beverages';

const redirect = (newCat, match, history) => {
  const { search } = match.params;
  let url = `/products/${newCat}`;

  if (search) {
    url += `/${search}`;
  }

  history.push(url);
};

const mapDispatchToProps = (dispatch, { match, history }) => {
  return {
    changeCategory(cat) {
      dispatch(getBevs(cat)).then(() => redirect(cat, match, history));
    },
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SelectCatDumb)
);
