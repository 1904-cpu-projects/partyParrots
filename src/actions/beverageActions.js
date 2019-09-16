import qs from 'query-string';
import { FETCH_ALL_BEVERAGES, UPDATED_BEV } from './sharedConstants';
import QuantitySelector from '../components/QuantitySelector/QuantitySelector';

const _fetchAllBeverages = response => ({
  type: FETCH_ALL_BEVERAGES,
  payload: response,
});

export const fetchAllBeverages = (category = 'All', search = 'All') => async (
  dispatch,
  _,
  axios
) => {
  try {
    const url = '/api/beverages';
    const queries = {};

    if (category !== 'All' && category) {
      queries.category = category;
    }
    if (search !== 'All' && search) {
      queries.search = search;
    }

    const { data } = await axios.get(url + '?' + qs.stringify(queries));
    const action = _fetchAllBeverages(data);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};

export const updatedBeverage = beverage => ({
  type: UPDATED_BEV,
  beverage,
});
