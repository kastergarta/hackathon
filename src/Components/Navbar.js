import React from 'react';

class NavBar extends React.Component {

  render(){

  if (this.props.loginClicked === false) {
    return (
      <div className="navbar">
        <div className="logo"> </div>
        <div className="buttons">
          <button
            className="register-button"
            onClick={this.props.handleLoginClick}>
            REGISTER
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div className="logo"> </div>
        <div className="buttons">
          <button className="profile-button">
            VIEW YOUR PROFILE
          </button>
        </div>
      </div>
    );
  }


 }
}

export default NavBar;
