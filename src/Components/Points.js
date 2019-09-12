import React from 'react';

class Points extends React.Component {

  render(){
  return (
    <div className="points">
      <div className="flex-points" >
        <img className="pointsIcons" src="images/1.png"/>
        <p className="pointsText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="flex-points">
        <img className="pointsIcons" src="images/2.png"/>
        <p className="pointsText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      <div className="flex-points"><img  className="pointsIcons" src="images/3.png"/><p className="pointsText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
      <div className="flex-points"><img className="pointsIcons" src="images/4.png"/><p className="pointsText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
      <div className="flex-points"><img className="pointsIcons" src="images/5.png"/><p className="pointsText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
      <div className="flex-points"><img className="pointsIcons" src="images/6.png"/><p className="pointsText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
    </div>
  );
 }
}

export default Points;
