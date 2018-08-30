import React from 'react';
import {Grid, Cell} from 'react-mdl';
import PortfolioPic from '../../Images/_DSC1461.jpg'
import './Experience.css'
 

class Experience extends React.Component{ 
    render(){
        return(
          <div className="grid-container animated fadeIn">
  <div className="grid-item">
  <img src={PortfolioPic} />
            <h4 style={{color: 'grey', paddingTop: '1em'}}>Full Stack Web and Mobile Developer</h4>
            <hr/>
            <p>Self-motivated full stack web and mobile developer, specializing in ReactJS, React Native, Node, and API integrations. With an eye for design and the necessary skills to assist, whether your company is a startup looking to scale or an enterprise company looking to find new growth opportunities. Experience creating mobile responsive websites, and web and mobile applications, with the passion and ability to quickly grasp new concepts in an ever-evolving field.</p>
            <div className="container">
  <div className="box"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'/></div>
  <div className="box"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png'/></div>
  <div className="box"><img src='https://angular.io/assets/images/logos/angular/angular.png'/></div>
  <div className="box"><img src='https://cdn.iconscout.com/icon/free/png-512/nodejs-6-569582.png'/>
</div>
<div className="box"><img src='http://www.softwaresamurai.org/wp-content/uploads/2017/12/RESTfil-API.png'/>
</div>
</div>
  </div>
  <div className="grid-item"><h2>Graduate Of...</h2>
            <h6 style={{color: 'grey'}}><span><strong>DevMountain</strong></span> - Dallas, Texas</h6>
            <p>Full-Stack Web and Mobile Development, February 2018 <br/>
  13 week, immersive, full time, web development school that provides the necessary skills to excel in
a full stack development career</p>

            <h6 style={{color: 'grey'}}><span><strong>Longwood University</strong></span> - Farmville, Virginia</h6>
            <p>Bachelors of Science Degree in Biology, December 2016</p>

            <hr/>
          <h2>Worked As...</h2>
          <h5 style={{color: 'grey'}}><span><strong>Full Stack Web Developer</strong></span> - Breaking Dawn Marketing and Advertising Inc.</h5>
            <p>Used modern technologies and languages to create full-stack applications across multiple platforms <strong>|</strong> Worked with HTML5, CSS3, JSON, JavaScript, React, and ES6 for developing user interface <strong>|</strong> Experience in using GIT for pulling and committing the developed content from/to the GIT repository <strong>|</strong> Involved in writing application level code to interact with APIs, Web Services using AJAX, JSON <strong>|</strong> Used NPM and Yarn as secure dependency management <strong>|</strong> Created and executed unit tests and performed basic application testing</p>

            <h5 style={{color: 'grey'}}><span><strong>IT Support: MPS Deployment Specialist I</strong></span> - World Bank</h5>
            <p> Coordinated with unit IT and office managers to ensure a successful deployment <strong>|</strong> Provided logistical support to vendors when delivering MPS equipment in each building <strong>|</strong> Prepared deployment progress and updated reports to provide communication to leadership <strong>|</strong> Documented all support orders and time tracking via web-based ticketing systems <strong>|</strong> Provided remote and on-site support troubleshooting connectivity issues for end-users <strong>|</strong> Served as a liaison to higher tier systems administrators</p>

  </div> 
</div>
        )
    }
}
export default Experience;