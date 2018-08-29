import React from 'react';
import {Grid, Cell} from 'react-mdl';
import PortfolioPic from '../../Images/_DSC1461.jpg'
import './Experience.css'
 

class Experience extends React.Component{ 
    render(){
        return(
          <div class="grid-container animated fadeIn">
  <div class="grid-item">
  <img src={PortfolioPic} />
            <h4 style={{color: 'grey', paddingTop: '2em'}}>Full Stack Web and Mobile Developer</h4>
            <hr/>
            <p>Self-motivated full stack web and mobile developer, specializing in ReactJS, React Native, Node, and API integrations. With an eye for design and the necessary skills to assist, whether your company is a startup looking to scale or an enterprise company looking to find new growth opportunities. Experience creating mobile responsive websites, and web and mobile applications, with the passion and ability to quickly grasp new concepts in an ever-evolving field.</p>
  </div>
  <div class="grid-item"><h2>Education</h2>
            <h6 style={{color: 'grey'}}><span><strong>DevMountain</strong></span> - Dallas, Texas</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <h6 style={{color: 'grey'}}><span><strong>Longwood University</strong></span> - Farmville, Virginia</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <hr/>
          <h2>Experience</h2>
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