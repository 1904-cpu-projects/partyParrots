import { updatedBeverage } from './beverageActions';

// Action types
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEM = 'GET_ITEM';
export const MADE_ITEM = 'MADE_ITEM';
export const UPDATED_ITEM = 'UPDATED_ITEM';
export const DELETED_ITEM = 'DELETED_ITEM';

export const START_ITEM_REQ = 'START_ITEM_REQ';

// Actions
const startRequest = () => ({ type: START_ITEM_REQ });

const gotItems = items => ({
  type: GET_ITEMS,
  items,
});

const gotItem = item => ({
  type: GET_ITEM,
  item,
});

const madeItem = item => ({
  type: MADE_ITEM,
  item,
});

const updatedItem = item => ({
  type: UPDATED_ITEM,
  item,
});

const deletedItem = id => ({
  type: DELETED_ITEM,
  id,
});

// Thunks
const validateStatus = _status => {
  return (_status >= 200 && _status < 300) || _status === 400;
};

export const getItems = () => async (dispatch, _, axios) => {
  try {
    dispatch(startRequest());
    const { data } = await axios.get('/api/orderItems/');
    dispatch(gotItems(data));
  } catch (error) {
    console.error(error);
  }
};

export const getItem = id => async (dispatch, _, axios) => {
  try {
    dispatch(startRequest());
    const { data } = await axios.get(`/api/orderItems/${id}`);
    dispatch(gotItem(data));
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line complexity
export const makeItem = body => async (dispatch, _, axios) => {
  try {
    dispatch(startRequest());

    const { data, status } = await axios.post('/api/orderItems', body, {
      validateStatus,
    });

    if (status === 400 && data && data.id && data.category) {
      dispatch(updatedBeverage(data));
    } else if (status === 400 && data && data.id && data.purchasePrice) {
      dispatch(gotItem(data));
    } else if (status === 200 && data.id) {
      dispatch(madeItem(data));
    }
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line complexity
export const updateItem = (id, quantity) => async (dispatch, _, axios) => {
  try {
    dispatch(startRequest());

    const { data, status } = await axios.put(
      `/api/orderItems/${id}`,
      { quantity },
      { validateStatus }
    );

    if (status === 400 && data && data.id && data.quantity) {
      dispatch(updatedBeverage(data));
    } else if (status === 204) {
      dispatch(deletedItem(id));
    } else if (status === 200 && data.id) {
      dispatch(updatedItem(data));
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteItem = id => async (dispatch, _, axios) => {
  try {
    dispatch(startRequest());

    const { status } = await axios.delete(`/api/orderItems/${id}`);

    if (status === 204) {
      dispatch(deletedItem(id));
    }
  } catch (error) {
    console.error(error);
  }
};
