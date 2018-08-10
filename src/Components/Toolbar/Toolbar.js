import React, {Component} from 'react';
import './Toolbar.css';
import ToggleBTN from '../SideBar/ToggleBTN'
import {Link} from 'react-router-dom';

const Toolbar = (props) => (
    <header className='toolbar'>
        <nav className='toolbar-nav'>
            <div className='toolbar-toggle'> <ToggleBTN click={props.sideBarClickHandler}/></div>
            <div className='toolbar-logo'> 
            <ul>
                <a href='https://www.facebook.com/virginiasboy9' target='blank'><li className="fa fa-facebook"> </li></a>
                <a href='https://www.github.com/berheet' target='blank'><li className="fa fa-github"> </li></a>
                <a href='https://www.linkedin.com/in/berheet/' target='blank'><li className="fa fa-linkedin"> </li></a>
                <a href='https://www.instagram.com/eyeberhe9/' target='blank'><li className="fa fa-instagram"> </li></a>

                    </ul>
                    </div>
            <div className='space'/>
            <div className='toolbar-items'> 
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    </ul>
            </div>
            </nav>
        </header>
)

export default Toolbar;