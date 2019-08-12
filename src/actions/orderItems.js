export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEM = 'GET_ITEM';
export const MADE_ITEM = 'MADE_ITEM';
export const UPDATED_ITEM = 'UPDATED_ITEM';
export const DELETED_ITEM = 'DELETED_ITEM';

export const UPDATE_BEV_QUANT = 'UPDATE_BEV_QUANT';

const updateBevQuant = ({ id, quantity }) => ({
  type: UPDATE_BEV_QUANT,
  id,
  quantity,
});

const gotItems = items => ({
  type: GET_ITEMS,
  items,
});

export const getItems = () => async (dispatch, _, axios) => {
  try {
    const { data } = await axios.get('/api/orderItems/');
    dispatch(gotItems(data));
  } catch (error) {
    console.error(error);
  }
};

const gotItem = item => ({
  type: GET_ITEM,
  item,
});

export const getItem = id => async (dispatch, _, axios) => {
  try {
    const { data } = await axios.get(`/api/orderItems/${id}`);
    dispatch(gotItem(data));
  } catch (error) {
    console.error(error);
  }
};

const madeItem = item => ({
  type: MADE_ITEM,
  item,
});

export const makeItem = body => async (dispatch, _, axios) => {
  try {
    const { data, status } = await axios.post('/api/orderItems', body, {
      validateStatus(_status) {
        return _status === 200 || _status === 400;
      },
    });

    if (status === 400 && data && data.error) {
      dispatch(updateBevQuant(data.error));
    } else if (status === 200 && data.id) {
      dispatch(madeItem(data));
    }
  } catch (error) {
    console.error(error);
  }
};

const updatedItem = item => ({
  type: UPDATED_ITEM,
  item,
});

const deletedItem = id => ({
  type: DELETED_ITEM,
  id,
});

export const updateItem = (id, quantity) => async (dispatch, _, axios) => {
  try {
    const { data, status } = await axios.put(
      `/api/orderItems/${id}`,
      { quantity },
      {
        validateStatus(_status) {
          return (_status >= 200 && _status < 300) || _status === 400;
        },
      }
    );

    if (status === 400 && data && data.error) {
      dispatch(updateBevQuant(data.error));
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
    const { status } = await axios.delete(`/api/orderItems/${id}`);

    if (status === 204) {
      dispatch(deletedItem(id));
    }
  } catch (error) {
    console.error(error);
  }
};
