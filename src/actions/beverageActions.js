import { FETCH_ALL_BEVERAGES, UPDATED_BEV } from './sharedConstants';

const _fetchAllBeverages = response => ({
  type: FETCH_ALL_BEVERAGES,
  payload: response,
});

export const fetchAllBeverages = (cat = 'All') => async (
  dispatch,
  _,
  axios
) => {
  try {
    let url = '/api/beverages';

    if (cat !== 'All' && cat) {
      url += `?category=${cat}`;
    }

    const { data } = await axios.get(url);
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
