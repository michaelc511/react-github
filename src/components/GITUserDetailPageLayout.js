import React from 'react';

import GITHeaderComponent from './GITHeaderComponent';
// import SearchFormComponent from './SearchFormComponent';
import CreateFormComponent from './CreateFormComponent';
// import BusinessComponent from './BusinessComponent';
import GITUserDetailComponent from './GITUserDetailComponent';

// import UserPrefComponent from './UserPrefComponent';

//export default function BusinessDetailPageLayout(props) {
export default function GITUserDetailPageLayout({
  userData = {},
  history
  // showForm2,
  // onShowForm2,
  // updateRental,
  // deleteRental,
  // showRental,
  // authenticatedUser,
  // userRole,
  // history,
  // userName
}) {
  //

  console.log('GIT USER DETAIL LAYOUT.....................');
  //console.log(props);
  console.log(userData);
  //mc//console.log(showForm2);

  //console.log(onShowForm2);
  //console.log(updateRental);
  //console.log(deleteRental);
  let title = 'Details Report';
  // let mockRental = {
  //   address: 'THIS IS MOCK DATA WILL GET LIVE DATA SOON!',
  //   price: '0'
  // };
  return (
    <div className="PageLayout">
      <GITHeaderComponent />

      <GITUserDetailComponent
        userData={userData}
        // showForm2={showForm2}
        // onShowForm2={onShowForm2}
        // updateRental={updateRental}
        // deleteRental={deleteRental}
        // authenticatedUser={authenticatedUser}
        // userRole={userRole}
        // userName={userName}
      />
    </div>
  );
}
