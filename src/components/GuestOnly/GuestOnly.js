import { connect } from 'react-redux';
import GuestOnly from './GuestOnlyDumb';

const mapStateToProps = ({ user }) => ({
  loggedIn: user.user && user.user.id,
});

export default connect(
  mapStateToProps,
  null
)(GuestOnly);
