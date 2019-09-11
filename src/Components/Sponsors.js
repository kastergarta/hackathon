import React from 'react';

class Sponsors extends React.Component {

  render(){
  return (
    <div className="sponsors">
        <div><img className="sponsorsImage" id="google" src="images/google-ads-launched-the-company-lets-google-adwords-go-824438.png"/></div>
        <div><img className="sponsorsImage" id="spotify" src="images/spotify-logo-png-transparent-spotify-logo-images-348161.png"/></div>
        <div><img className="sponsorsImage" id="etsy" src="images/logo-etsy-png-png-image-738724.png"/></div>
        <div><img className="sponsorsImage" id="mongo" src="images/mongodb-atlas-hits-amazon-web-services-marketplace-499956.png"/></div>
        <div><img className="sponsorsImage" id="ibm" src="images/ibm-logos-png-images-free-download-ibm-logo-png-876586.png"/></div>
    </div>
  );
 }
}

export default Sponsors;


