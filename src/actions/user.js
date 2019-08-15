export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT = 'LOGOUT';

export const loginUser = user => ({
  type: LOGIN_USER,
  user,
});

const _logout = () => ({ type: LOGOUT });

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

export const logout = () => async (dispatch, _, axios) => {
  try {
    await axios.delete('/auth/logout');
    dispatch(_logout());
  } catch (error) {
    console.error(error);
  }
};
