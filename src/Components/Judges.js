import React from 'react';

class Judges extends React.Component {

  render(){
  return (
    <div className="judgeDiv">
    <h1>Judges</h1>
    <div className="judges">
      
      <div className="judge"><img className="judgeImage" src="images/elon_musk.png" /><p className="judgeText">Musk</p></div>
      <div className="judge"><img className="judgeImage" src="images/macgrubber.png" /><p className="judgeText">Macgrubber</p></div>
      <div className="judge"><img className="judgeImage" src="images/steve-jobs.png" /><p className="judgeText">Jobs</p></div>
    </div>
    </div>
  );
 }
}

export default Judges;
