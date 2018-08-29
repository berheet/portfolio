import React, {Component} from 'react';
import './Project.css'
import MEBUIMG from '../../Images/MEBU.jpg'
import evoFitness from '../../Images/evolution.jpg';

const Projects = () =>(
<div className='project-div'>
<div className='proj'><h2 >Projects</h2></div>
        <div class="main-content animated fadeIn">
                <div class="card"> 
                        <img className='evo' src={evoFitness}/><br/>
                        <i class="material-icons">Evolution Fitness</i>
                        <h1>Full-Stack Web Developer</h1>
                        <p>Evolution Fitness is a health-based website that promotes a positive and healthy lifestyle tailored to individual users. Through the use of mathematical formulas, users receive specific dietary and exercise recommendations, as well as tips along the way, that are proven to help them reach their goals. </p> 
                        <div className='unnecessary'></div>
                        <a class="btn" href="http://evolutionhealth.us/" target='blank'>View Project</a>
                             
                </div> 
                <div class="card">
                        <img src={MEBUIMG}/><br/>
                        <i class="material-icons">MEBU</i>
                        <h1>Back-End Developer</h1>
                        <p>MEBU is a real estate property management application that provides communication between property managers and tenants, in a well-designed, easy to use platform. MEBU allows property managers to view their available properties, supervise current tenants, track metrics, and address maintenance concerns. It also provides a platform for tenants to pay bills, place work order requests and communicate with other current tenants. 
</p><br/><br/>
                        <a className="btn" href="http://mebu.herokuapp.com/" target='blank'>View Project</a>   
                </div>     
        </div>
            
</div>               
        )

export default Projects;