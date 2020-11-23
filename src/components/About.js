  
import React, { Component } from 'react';
import img4 from '../img/IMG_3217.jpg'

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src={img4} />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               I am a Self taught front end web developer.  Currently I am working in logistics while spending my nights and weekends learning JavaScript and JavaScript frameworks.  My interest in wanting to build simple and fun games lead me to start taking classes in Web Development, and I quickly developed a strong passion and interest in coding. 
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>https://github.com/Jzas1</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}