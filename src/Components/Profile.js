import React, { Component } from 'react';

class Profile extends Component {
  state = {
    name: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/profile',{
      headers: {
        'Authorization': `Bearer ${localStorage.jwt}`
      }
    })
    .then(res => res.json())
    .then(data => this.setState({name: data.user.name}))

  }

  render() {
    // console.log(this.state.name)
    switch (this.state.name) {
           case ('Den'):
             return (
               <div className="App">
                 <h1>Welcome {this.state.name}!</h1>
                 <p>Here are your skills </p>
               </div>
             );
           default:
    return (
      <div>
        555
      </div>
    );
  }
}
}
export default Profile;
