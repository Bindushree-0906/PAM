import React, { Component } from 'react'
import './LandingPage.css'
import { IconName } from "react-icons/fa";


export class LandingPage extends Component {
  render() {
    return (
      <div>
      <div>
      <div className='at-container'>
        <div className='at-item'>Build-Better-Together
            </div>
            
        </div>
        <br/>
         <h5 className='at-item1' style={{color:"white"}}>With this platform we can build a solution to manage and access across the projects with various tools. </h5></div>
<br/>
<br/>
<div className="container-fluid text-center bg-grey">
<h2 style={{color:"white"}}>Manage Projects With One Tool</h2><br/>
<h4 style={{color:"white"}}>What we have created</h4>
<br/>
<div className="row text-center">
  <div className="col-sm-4">
    <div className="thumbnail">
      <img src="download.png" alt="Paris" width="400" height="300"></img>
      <br/>
      <p style={{color:"white"}}><strong>Centralize all your work, processes,
                                  tools, and files into one Work OS. 
                                  Connect teams, bridge silos, and 
                                  maintain one source of truth across 
                                  your organization.Collaborate effectively 
                                  organization-wide to get a clear picture of 
                                  all your work. Stay in the loop with easy-to-use
                                  automations and real-time notifications.</strong></p>
                                  <br/>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="thumbnail">
      <img className='image1' src="images.jpeg" alt="New York" width="400" height="300"></img>
      <p style={{color:"white"}}><strong>Your all-in-one platform to manage projects,
                                  organize work,enhance collaboration and accelerate 
                                  execution across all departments.Empower your teams
                                  to do the best work of their 
                                  lives with 360° visibility, true cross-departmental collaboration, 
                                  and powerful automation.</strong></p>
                                  
    </div>
  </div>
  <div className="col-sm-4">
    <div className="thumbnail">
      <img src="images.png" alt="San Francisco" width="400" height="300"></img>
      <p style={{color:"white"}}><strong>Powerful work management
         solution without tradeoffs and experience configurability, scalability,
        and ease of use — all at once.</strong></p>
      
    </div>
  </div>
</div>
</div>



</div>
             




          
    )




  }
}

export default LandingPage