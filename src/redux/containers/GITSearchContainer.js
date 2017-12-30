// 4C
// 1) import the stuff
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
// 2C) import the OrderPage we want to contain

// mccode
import GITPage from '../../components/GITPage';

// mccode
import getGITUserByIdProcess from '../thunks/getGITUserByIdProcess';

// // 3C) import the Processes from the thunks
// import getAllPrefsProcess from '../thunks/getAllPrefsProcess';
// import createRentalProcess from '../thunks/createRentalProcess';
// import deleteRentalProcess from '../thunks/deleteRentalProcess';
// import updateRentalProcess from '../thunks/updateRentalProcess';
//
// import loginUserProcess from '../thunks/loginUserProcess';
// import logoutUserProcess from '../thunks/logoutUserProcess';
//
// import createUserProcess from '../thunks/createUserProcess';

// withRouter for Redirection
import { withRouter } from 'react-router-dom';

// // 11/1
// import getByIdProcess from '../thunks/getByIdProcess';

// 4C) mapStateToProps function
function mapStateToProps(state, ownProps) {
  //console.log('GIT SEARCH CONTAINTER MAPTOSTATE');
  //console.log(state);
  return {
    //mccode /////
    usersData: state.usersData,
    userData: state.userData,

    search: state.search,
    showGITReport: state.showGITReport
    // mccode /////
  };
}
// 5C) mapDispatchToProps functionto call the dispatches
// move dispatch from App.js and remove 'this.props.store'
// for private method names '_name', rename them to what is to be passed
function mapDispatchToProps(dispatch, ownProps) {
  // //console.log(ownProps);
  // //console.log(ownProps.selectedMessageIds);

  let defaultUser = 'michaelc511'; //ownProps.match.params.userId;
  // if (ownProps.match.params.userId === 'undefined') {
  //   defaultUser = 'michaelc511';
  // }
  //console.log('1 GITSEARCHContainer.....................................................', defaultUser);

  return {
    // onMount
    // DB Processes
    // get all the user data on mount
    onMount: () => dispatch(getGITUserByIdProcess(defaultUser)),

    // mccode showUser
    showUser: user => {
      console.log('SHOWUSER CLICK');
      let newUser = user;
      return dispatch(getGITUserByIdProcess(newUser, true));
    }
  };
}
// 6) connectToStore
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// 7) onDidMount
const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});
// 8) export compose
export default compose(connectToStore, onDidMount)(withRouter(GITPage));
