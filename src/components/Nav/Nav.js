import { connect } from 'react-redux';
import Nav from './NavDumb';

const mapStateToProps = ({ user }) => ({
  loggedIn: user.user && user.user.id,
});

export default connect(
  mapStateToProps,
  null
)(Nav);
