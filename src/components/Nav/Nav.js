import { connect } from 'react-redux';
import Nav from './NavDumb';
import { logout as _logout } from '../../actions/user';

const mapStateToProps = ({ user }) => ({
  loggedIn: user.user && user.user.id,
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(_logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
