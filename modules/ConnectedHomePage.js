import { connect } from 'react-redux';
import HomePage from './HomePage';
const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.get('isLoggedIn'),
      currentUser: state.get('currentUser')
    };
};
console.log('reached connect');
export default connect(mapStateToProps, null)(HomePage);
