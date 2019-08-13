import { connect } from 'react-redux';
import { loginUser } from '../../actions/user';
import CreateUser from './CreateUser';

const mapDispatchToProps = dispatch => {
  return {
    _loginUser: user => {
      dispatch(loginUser(user));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateUser);
