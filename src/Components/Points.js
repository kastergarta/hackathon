import React from 'react';

class Points extends React.Component {

  render(){
  return (
    <div className="points">
      <div className="flex-points" >
        <img src="https://image.flaticon.com/icons/png/128/121/121727.png"/>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
      <div className="flex-points">2</div>
      <div className="flex-points">3</div>
      <div className="flex-points">4</div>
      <div className="flex-points">5</div>
      <div className="flex-points">6</div>
    </div>
  );
 }
}

export default Points;
