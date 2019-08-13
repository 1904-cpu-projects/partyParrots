import { FETCH_ALL_BEVERAGES, UPDATED_BEV } from './sharedConstants';
import Axios from 'axios';

const _fetchAllBeverages = response => ({
  type: FETCH_ALL_BEVERAGES,
  payload: response,
});

export const fetchAllBeverages = () => async dispatch => {
  try {
    const api = await Axios.get('/api/beverages');
    const response = api.data;
    dispatch(_fetchAllBeverages(response));
  } catch (err) {
    console.log('there was an error in fetchAllBeverages');
  }
};

export const updatedBeverage = beverage => ({
  type: UPDATED_BEV,
  beverage,
});
