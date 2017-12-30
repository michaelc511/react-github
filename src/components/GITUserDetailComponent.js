import React from 'react';

/*
// if not defined, show NA
*/

export default function GITUserDetailComponent(props) {
  //  if (!userpref) return null;

  console.log('GITUserDetailComponent>>>>>>>>>>>>>');
  console.log('Is Array?', Array.isArray(props.usersData));
  console.log('Type of ?', typeof props.usersData);

  console.log('BREAK IT DOWN >>>>>>>>>>>>>');

  console.log('props.usersData', props.usersData);
  //let user = props.userData[0];
  // console.log('ONE ELEMENT', props.userData[0]); // WORKS FINE
  // console.log('ID OF ONE ELEMENT', props.userData[0].id); // DOES NOT WORK id

  let photourl = 'https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png';

  // if (props.userData.avatar_url !== 'undefined') {
  //   photourl = props.userData.avatar_url;
  // }
  if (props.usersData && Array.isArray(props.usersData)) {
    console.log('YESSSSS');
    if (props.usersData[0].owner.avatar_url !== 'undefined') {
      photourl = props.usersData[0].owner.avatar_url;
    }

    return (
      <div className="   BusinessItemDetailComponent">
        <div className="card">
          <div className="card-image2">
            <img src={photourl} alt="Nothing" width="400" />
          </div>
          <div className="card-content">
            <span className="card-title" />
            <p />
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>User id:</b> {props.usersData[0].owner.login}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>GITHub URL:</b> <a href={props.usersData[0].owner.html_url}>{props.usersData[0].owner.html_url}</a>
                  </td>
                </tr>
                {props.usersData.map(
                  userData => {
                    // //console.log('looping.........................');
                    // //console.log(props.search);
                    let url = userData.owner.html_url + '/' + userData.name;
                    return (
                      // <div className="card-content">
                      //   <span className="card-title" />
                      //   <p />
                      //   <table>
                      //     <tbody>
                      <tr>
                        <td>
                          <b> Repo : </b>
                          <a href={url}>
                            {userData.full_name}
                          </a>
                        </td>
                        <td>
                          <b> StarGazers : </b>
                          {userData.stargazers_count}
                        </td>
                      </tr>

                      //     </tbody>
                      //   </table>
                      // </div>
                    ); // end of return
                  } //end of function
                ) // end of map
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    // console.log('WHY?????');
    return <div>Loading...the stuff..</div>;
  }
}
