import React from 'react';

class NavBar extends React.Component {

  render(){

    return (
      <div className="navbar">
        <div>
              <img  className="logo" src="images/logo.png"/>
        </div>
        <div className="buttons">
          <button
            className="register-button"
            onClick={this.props.handleLoginClick}>
            LOGIN
          </button>
          <button
            className="signup-button"
            onClick={this.props.handleSignUpClick}
          >
            SIGNUP
          </button>
        </div>
      </div>
    )
 }
}

export default NavBar;
