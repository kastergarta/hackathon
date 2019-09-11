import React from 'react';
import './App.css';
import NavBar from './Components/Navbar.js'
import MainInfo from './Components/MainInfo.js'
import Points from './Components/Points.js'
import Sponsors from './Components/Sponsors.js'
import Judges from './Components/Judges.js'
import FAQ from './Components/FAQ.js'
import Footer from './Components/Footer.js'
import SignUp from './Components/SignUp.js'
import LogIn from './Components/LogIn.js'
import Profile from './Components/Profile.js'
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom'



class App extends React.Component {

  state ={
    page: ' '
  }

 handleLoginClick = () => {
 this.setState ({
   page: 'login'
 })
 }

 handleSignUpClick = () => {
 this.setState ({
   page: 'signup'
 })
 }

 handleLogOutClick = () => {
   localStorage.clear();
 }

 handleProfileClick = () => {
 this.setState ({
   page: 'profile'
 })
 }

  render(){

    switch (this.state.page) {
         case 'login':
           return (
             <div className="App">
               <NavBar handleLoginClick={this.handleLoginClick} handleSignUpClick={this.handleSignUpClick} handleLogOutClick={this.handleLogOutClick} handleProfileClick={this.handleProfileClick}/>
               <LogIn />
               <MainInfo />
               <Points />
               <Sponsors />
               <Judges />
               <FAQ />
               <Footer />
             </div>
           );
         case 'signup':
         return (
           <div className="App">
             <NavBar handleLoginClick={this.handleLoginClick} handleSignUpClick={this.handleSignUpClick} handleLogOutClick={this.handleLogOutClick} handleProfileClick={this.handleProfileClick}/>
             <SignUp />
             <MainInfo />
             <Points />
             <Sponsors />
             <Judges />
             <FAQ />
             <Footer />
           </div>
         );
         case 'profile':
         return (
           <div className="App">
             <NavBar handleLoginClick={this.handleLoginClick} handleSignUpClick={this.handleSignUpClick} handleLogOutClick={this.handleLogOutClick} handleProfileClick={this.handleProfileClick}/>
             <Profile />
             <MainInfo />
             <Points />
             <Sponsors />
             <Judges />
             <FAQ />
             <Footer />
           </div>
         );
         default:
         return (
           <div className="App">
             <NavBar handleLoginClick={this.handleLoginClick} handleSignUpClick={this.handleSignUpClick} handleLogOutClick={this.handleLogOutClick} handleProfileClick={this.handleProfileClick}/>
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
