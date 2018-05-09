import React from 'react';
import banner from '../resources/pictures/raybanner.png';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={banner} className="img-fluid" alt="logo" />
      </header>
    );
  }
}

export default Header;
