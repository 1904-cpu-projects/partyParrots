export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = user => ({
  type: LOGIN_USER,
  user,
});

export const getMe = () => async (dispatch, _, axios) => {
  try {
    const { data } = await axios.get('/auth/me');
    if (data) {
      dispatch(loginUser(data));
    }
  } catch (error) {
    console.error(error);
  }
};
