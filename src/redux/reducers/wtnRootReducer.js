//import updateMessage from '../../api/updateMessage';
// import deleteMessage from '../../api/deleteMessage';
// import createMessage from '../../api/createMessage';
// import getAllPrefsProcess from '../thunks/getAllPrefsProcess';

// REDUCER
// 1) INITIALIZE VARIABLES FOR THE STATE
// 2) RETURN STATE
export default function wtnRootReducer(
  // console.log("REDUCER");
  currentState = {
    // mccode ////////////////////////////////
    // userData
    usersData: [],
    userData: {},
    //showReport
    showGITReport: false,
    search: {
      keyword: 'all',
      sort: 'all',
      price: 0
    }
    // mccode ////////////////////////////////

    // INITIATE VARIABLES
    // token: null,
    // //0 showForms
    // // search rental form
    // showForm: false,
    // //update rental form
    // showForm2: false,
    //
    // // login and user creation form
    // showLoginForm: false,
    // showUserForm: false,
    //
    // authenticatedUser: 'guest_user',
    // userRole: 'guest_role',
    // userName: 'guest_user',
    // //1 rentals objects from DB store in state
    // rentals: [],
    // currentRental: {}
    //
    // // 2. level
    // level: 'admin',
    //
    // // 3. search objects
    // search: {
    //   keyword: 'all',
    //   sort: 'all',
    //   price: 0
    // },
    // loginError: ''
  },
  action
) {
  switch (action.type) {
    // mccode ////////////////////////////////
    case 'LOAD_PAGE':
      return { ...currentState, showGITReport: false };

    case 'GET_RENTAL':
      //mc//console.log('GET_PREFS');
      //mc//console.log(action.rentals);

      //mc//console.log(currentState.search);
      //mc//console.log(resetSearch);

      return { ...currentState, currentRental: action.rental, showForm2: false };

    case 'GET_USER':
      console.log('REDUCER GET_USER REDUCER .....', action.users);

      return { ...currentState, usersData: action.users };

    case 'GIT_USER_ERROR':
      console.log('REDUCER GIT_USER_ERROR REDUCER .....', action.users);

      return { ...currentState, usersData: action.users };

    //////////////////////////////
    case 'GET_PREFS':
      //mc//console.log('GET_PREFS');
      //mc//console.log(action.showForm);

      let resetSearch = {
        keyword: 'all',
        sort: 'all',
        price: 0
      };
      //mc//console.log(currentState.search);
      //mc//console.log(resetSearch);

      return { ...currentState, rentals: action.rentals, search: resetSearch, showForm: false };
    // mccode ////////////////////////////////
    //
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // case 'SET_SEARCH':
    //   // filter here/////////////////////
    //   //mc//console.log('SET_SEARCH ......................', currentState.rentals);
    //   //mc//console.log(currentState.search.price);
    //
    //   // filter by price /////////////////////
    //   var filterRentals = currentState.rentals;
    //   if (currentState.search.price === 1000) {
    //     //mc//console.log('PRICE FILTER .............................');
    //     filterRentals = currentState.rentals.filter(rental => {
    //       //mc//console.log('PRICE/SEARCH ........................' + rental.price + ' ' + currentState.search.price);
    //       return Number(rental.price) > Number(currentState.search.price);
    //     });
    //   }
    //
    //   return { ...currentState, search: action.search, rentals: filterRentals };
    //
    // case 'SET_SEARCH_SORT':
    //   // filter here/////////////////////
    //   //mc//console.log('SET_SEARCH_SORT ......................', currentState.rentals);
    //   //mc//console.log(currentState.search.price);
    //
    //   // sort by price /////////////////////
    //   // if (currentState.search.sort === 'price') {
    //   filterRentals = currentState.rentals;
    //   //mc//console.log('PRICE SORT .............................', typeof filterRentals[0].price === 'number');
    //   const foo = [...currentState.rentals];
    //   const newFilterRentals = foo.sort((a, b) => {
    //     return Number(a.price) - Number(b.price);
    //     // if (a.price < b.price) {
    //     //   return -1;
    //     // }
    //     // if (a.price > b.price) {
    //     //   return 1;
    //     // }
    //     // return 0;
    //   });
    //   // }
    //   //mc//console.log(filterRentals, 'this should be sorte');
    //
    //   return { ...currentState, search: action.search, rentals: newFilterRentals };
    //
    // case 'SET_SEARCH_WORD':
    //   // filter here/////////////////////
    //   //mc//console.log('SET_SEARCH_WORD......................', currentState.rentals);
    //   //mc//console.log(currentState.search.price);
    //
    //   // // search by keyword //////////////////////////
    //   if (currentState.search.keyword !== 'all') {
    //     //mc//console.log('KEYWORD SEARCH .............................');
    //     filterRentals = currentState.rentals;
    //
    //     filterRentals = filterRentals.filter(rental => {
    //       //mc//console.log('KEYWORD STUFF................');
    //       //mc//console.log(rental.description.indexOf(currentState.search.keyword) >= 0);
    //       return rental.description.indexOf(currentState.search.keyword) >= 0;
    //     });
    //     //mc//console.log(filterRentals.length);
    //   }
    //   return { ...currentState, search: action.search, rentals: filterRentals };
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // case 'RESET_SEARCH':
    //   //mc//console.log('RESET SEARCH');
    //   return { ...currentState, rentals: action.rentals };
    //
    // case 'SHOW_FORM':
    //   //mc//console.log('SHOW_FORM');
    //
    //   return { ...currentState, showForm: action.showForm };
    //
    // case 'SHOW_FORM2':
    //   //mc//console.log('SHOW_FORM2');
    //
    //   return { ...currentState, showForm2: action.showForm2 };
    // //////////////////////////////////////////////////////////////////////////////////////////
    //
    // // D
    // case 'SHOW_USER_FORM':
    //   //mc//console.log('SHOW_USER_FORM');
    //
    //   return { ...currentState, showUserForm: action.showUserForm, showLoginForm: action.showLoginForm };
    // // D
    case 'CREATE_USER':
      //mc//console.log('CREATE_USER');
      return { ...currentState, showUserForm: action.showUserForm };
    //////////////////////////////////////////////////////////////////////////////////////////
    case 'SHOW_LOGIN_FORM':
      //mc//console.log('SHOW_LOGIN_FORM');

      return { ...currentState, token: action.token, showLoginForm: action.showLoginForm, showUserForm: action.showUserForm };
    case 'LOGOUT':
      //mc//console.log('LOGOUT REDUCER');

      return {
        ...currentState,
        token: action.token,
        authenticatedUser: action.authenticatedUser,
        userRole: action.userRole,
        showLoginForm: action.showLoginForm,
        userName: action.userName
      };

    case 'LOGIN_USER':
      //mc//console.log('LOGIN USER ' + action.token);

      return {
        ...currentState,
        token: action.token,
        authenticatedUser: action.authenticatedUser,
        userRole: action.userRole,
        userName: action.userName,
        showLoginForm: action.showLoginForm
      };

    case 'LOGIN_ERROR':
      //mc//console.log('LOGON ERROR ' + action.loginError);

      return {
        ...currentState,
        loginError: action.loginError
      };

    case 'CREATE_USER_ERROR':
      //mc//console.log('CREATE USER ERROR ' + action.loginError);

      return {
        ...currentState,
        loginError: action.loginError
      };

    case 'LOGIN_RESET':
      //mc//console.log('LOGIN_RESET ERROR ' + action.loginError);

      return {
        ...currentState,
        loginError: action.loginError
      };
    // //////////////////////////////////////////////////////////////////////////////////////////
    //

    // ////////////////////////////////
    // case 'GET_RENTAL':
    //   //mc//console.log('GET_PREFS');
    //   //mc//console.log(action.rentals);
    //
    //   //mc//console.log(currentState.search);
    //   //mc//console.log(resetSearch);
    //
    //   return { ...currentState, currentRental: action.rental, showForm2: false };
    //
    // case 'CREATE_RENTAL':
    //   //mc//console.log('CREATE_RENTAL');
    //
    //   return { ...currentState, rentals: [action.newRental, ...currentState.rentals], showReport: action.showReport, showForm: action.showForm };
    //
    // case 'DELETE_RENTAL':
    //   //mc//console.log('DELETE_RENTAL...............', action.newRental);
    //   // 1) get the current state of 'rentals'
    //   let updatedRentals = currentState.rentals;
    //   // 2) Create a new arry of 'rentals' based on the 'rental id' and 'rental'
    //   updatedRentals = updatedRentals.filter(
    //     rental => rental.id !== action.newRental.id //
    //   );
    //
    //   //mc//console.log('DELETE UPDATED RENTALS ..................', updatedRentals);
    //   return { ...currentState, rentals: updatedRentals, showReport: action.showReport, showForm: action.showForm };
    //
    // // UPDATE_RENTAL /////////////////////////
    // case 'UPDATE_RENTAL':
    //   //mc//console.log('UPDATE_RENTAL');
    //
    //   // 1) get the current state of 'rentals'
    //   let newRentals = currentState.rentals;
    //   // 2) Create a new arry of 'rentals' based on the 'rental id' and 'rental'
    //   newRentals = newRentals.map(
    //     rental =>
    //       rental.id === action.updatedRental.id //
    //         ? action.updatedRental //(message.starred = true) //
    //         : rental
    //   );
    //   //mc//console.log(newRentals);
    //   // 3) return the 'currentState' and 'rentals' with the 'newRentals'
    //   return { ...currentState, rentals: newRentals, showReport: action.showReport };

    default:
      return currentState;
  }
}
