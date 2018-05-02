import React from 'react';
import userPlaceHolder from '../resources/pictures/user-icon-placeholder.png';

class UserInfo extends React.Component {
  render() {
    return (
      <div className="row col-lg-5">
        <div className="col-5">
          <div>
            Your Ballance:
          </div>
          <div className="bg-dark text-white rounded">
            500
          </div>
        </div>
        <div className="col-3">
          <img src={userPlaceHolder} className="img-fluid user-logo"></img>
        </div>
        <div className="col-4">
          <div>
            Welcome
          </div>
          <div>
            <h3>Norbert</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
