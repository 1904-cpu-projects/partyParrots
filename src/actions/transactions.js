export const GOT_TRANSACTIONS = 'GOT_TRANSACTIONS';

const gotTransactions = transactions => ({
  type: GOT_TRANSACTIONS,
  transactions,
});

export const getTransactions = () => async (dispatch, _, axios) => {
  try {
    const { data } = await axios.get('/api/orders/');
    dispatch(gotTransactions(data));
  } catch (error) {
    console.error(error);
  }
};
