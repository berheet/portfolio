import React, {Component} from 'react';
import './Home.css';
import PortfolioIMG from '../../Images/_DSC1461.jpg'

const Home = () =>(
        <div className='home-div animated bounceInLeft'>
        <h1 className='welcome-statement'>Welcome to my Portfolio Site!</h1>
                <div className='img'><img src={PortfolioIMG}/></div>
                <p> My name is <strong>Eyobell Berhe</strong>, I am a self-motivated full stack web and mobile developer, specializing in ReactJS, React Native, Node, and API integrations. With an eye for design and the necessary skills to assist, whether your company is a startup looking to scale or an enterprise company looking to find new growth opportunities. Experience creating mobile responsive websites, and web and mobile applications, with the passion and ability to quickly grasp new concepts in an ever-evolving field.</p>
            <div className='list-of-frameworks'>
                <ul>
                    <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'/></li>
                    <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'/></li>
                    <li><img src='https://safenet.gemalto.com/uploadedImages/images/Logos/postgresql-logo.png'/></li>
                    <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'/></li>
                    <li><img src='https://vignette.wikia.nocookie.net/howtoprogram/images/a/a9/CSS3.png/revision/latest?cb=20130422012035'/></li>
                    </ul>
            </div>
        </div>               
        )

export default Home;