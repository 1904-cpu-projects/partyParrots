import { connect } from 'react-redux';
import Nav from './NavDumb';
import { logout as _logout } from '../../actions/user';
import { toggleNav as _toggleNav } from '../../actions/uiActions';

const mapStateToProps = ({ user, ui }) => ({
  loggedIn: user.user && user.user.id,
  navOpen: ui.navOpen,
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(_logout());
  },
  toggleNav(e) {
    e.preventDefault();
    dispatch(_toggleNav());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
