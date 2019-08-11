// Action types
export const GOT_BEVS = 'GOT_BEVS';

// Action creators
const gotBevs = beverages => ({
  type: GOT_BEVS,
  beverages,
});

// Thunks
export const getBevs = (cat = 'All') => async (dispatch, _, axios) => {
  try {
    let url = '/api/beverages';

    if (cat !== 'All') {
      url += `?category=${cat}`;
    }

    const { data } = await axios.get(url);
    const action = gotBevs(data);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
