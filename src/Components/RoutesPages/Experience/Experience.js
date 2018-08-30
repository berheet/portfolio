import React from 'react';
import {Grid, Cell} from 'react-mdl';
import PortfolioPic from '../../Images/_DSC1461.jpg'
import './Experience.css'
 

class Experience extends React.Component{ 
    render(){
      console.log(this.props.location.pathname)
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h.</p>

            <h6 style={{color: 'grey'}}><span><strong>Longwood University</strong></span> - Farmville, Virginia</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>

            <hr/>
          <h2>Worked As...</h2>
          <h5 style={{color: 'grey'}}><span><strong>Full Stack Web Developer</strong></span> - Breaking Dawn Marketing and Advertising Inc.</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <h5 style={{color: 'grey'}}><span><strong>Longwood University</strong></span> - Farmville, Virginia</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

  </div> 
</div>
        )
    }
}
export default Experience;