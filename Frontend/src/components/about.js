import React, { Component } from 'react'
import '../css/home.css'

class about extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <div className="aboutus">
            <div className="box">
              <br></br>
 
              <h1 id="h2" style={{color:'black'}}> About us</h1>
              <h2 id="label" style={{color:'black'}}>
                {/* ,height:700 */}
                We @DoorStep team only wants our Customers will get all the
                required household services on their doorstep just by accessing
                this site and which will help them to find perfect service
                provider for their particular need.
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
