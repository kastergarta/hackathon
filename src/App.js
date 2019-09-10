import React from 'react';
import './App.css';
import NavBar from './Components/Navbar.js'
import MainInfo from './Components/MainInfo.js'
import Points from './Components/Points.js'
import Sponsors from './Components/Sponsors.js'
import Judges from './Components/Judges.js'
import FAQ from './Components/FAQ.js'
import Footer from './Components/Footer.js'
import LoginForm from './Components/LoginForm.js'
import Profile from './Components/Profile.js'
import 'bootstrap/dist/css/bootstrap.css';



class App extends React.Component {

  state ={
    loginClicked: false
  }

 handleLoginClick = () => {
 this.setState ({
   loginClicked: true
 })
 }

 handleSubmit = () => {
 this.setState ({
   loginClicked: false
 })
 }

  render(){

  if (this.state.loginClicked === false) {
    return (
      <div className="App">
        <NavBar handleLoginClick={this.handleLoginClick} loginClicked={this.state.loginClicked}/>
        <MainInfo />
        <Points />
        <Sponsors />
        <Judges />
        <FAQ />
        <Footer />
      </div>
    );
  } else {
  return (
    <div className="App">
      <NavBar handleLoginClick={this.handleLoginClick}/>
      <LoginForm handleSubmit={this.handleSubmit}/>
      <Profile />
      <MainInfo />
      <Points />
      <Sponsors />
      <Judges />
      <FAQ />
      <Footer />
    </div>
  );
}
}
}

export default App;
