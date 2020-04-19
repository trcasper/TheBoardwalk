import React from "react";
import "./Landing.scss";

class Landing extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Landing">
        <div id="Intro">

          <div className="Nav">
            <div id="HomeLink">Home</div>
            <div id="AboutLink">About</div>
            <div id="InsideLink">Inside</div>
            <div id='ContactLink'>Contact</div>
            <div id='EventsLink'>Events</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;


{/* <div className="TestText">This is a test to see how retarded
<br/>i am when it comes to adjusting the sizes for this bull
<br/>anything anything anything anything anything anything
<br/>Test Test Test</div> */}