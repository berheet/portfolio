import React, {Component} from 'react';
import './Home.css';
import PortfolioIMG from '../../Images/_DSC1461.jpg'
import {Grid, Cell} from 'react-mdl';


const Home = () =>(
    <div className='home-div animated fadeIn'>
    <Grid className='landing-grid'>
    <Cell col={12}> 
    <img src={PortfolioIMG} className='portfolio-img' style={{marginTop:'20px', marginBottom:'20px'}}/>
    <div className='banner-text'>
        <h1> Full Stack Web Developer </h1>

        <hr />

        <p> JavaScript | HTML5 | CSS3 | React | NodeJS | Express | Redux | Restful API | PostgresSQL/MySQL/SQLite | Mobile Responsive Design | Git/Github | Pair Programming | Authentication | React Native | VueJS</p>
        <div className="home-grid-container">
  <div className="home-grid-item"><a href='https://www.facebook.com/virginiasboy9' target='blank'><li className="fa fa-facebook fa-3x"> </li></a></div>
  <div className="home-grid-item"><a href='https://www.github.com/berheet' target='blank'><li className="fa fa-github fa-3x"> </li></a></div>
  <div className="home-grid-item"><a href='https://www.linkedin.com/in/berheet/' target='blank'><li className="fa fa-linkedin fa-3x"> </li></a></div>  
  <div className="home-grid-item"><a href='https://www.instagram.com/eyeberhe9/' target='blank'><li className="fa fa-instagram fa-3x"> </li></a></div>
</div>
        </div>
    </Cell>
        </Grid>
    </div>
        )

export default Home;