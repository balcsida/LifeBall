import React from 'react';

import logo from '../resources/pictures/lifeball_logo.svg';
import UserInfo from './UserInfo.js'

class NavBar extends React.Component {

  render() {
    return (
      <div className="">
        <nav className="navbar navbar-toggleable-md bg-grad">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#"><img src={logo} width="200" height="50"></img></a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Games <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Bets</a>
              </li>
            </ul>
            <UserInfo user={this.props.user}/>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
