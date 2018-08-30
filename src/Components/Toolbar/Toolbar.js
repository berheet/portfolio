import React, {Component} from 'react';
import './Toolbar.css';
import ToggleBTN from '../SideBar/ToggleBTN'
import {Link} from 'react-router-dom';

const Toolbar = (props) => (
    <header className='toolbar'>
        <nav className='toolbar-nav'>
            <div className='toolbar-toggle'> <ToggleBTN click={props.sideBarClickHandler}/></div>
            <div className='toolbar-logo'> 

          <h3><span><i style={{color:'blue'}} className="fa fa-code" aria-hidden="true"></i></span> <a href='/' className='eyobell'>Eyobell Berhe</a></h3>
                    </div>
            <div className='space'/>
            <div className='toolbar-items'> 
                <ul>
                    <li><strong> <Link to='/' className='eyobellz'>Home</Link></strong></li>
                    <li><strong><Link to='/experience' className='eyobellz'>Experience</Link></strong></li>
                    <li><strong><Link to='/projects' className='eyobellz'>Projects</Link></strong></li>
                    <li><strong><Link to='/contact' className='eyobellz'>Contact</Link></strong></li>
                    </ul>
            </div>
            </nav>
        </header>
)

export default Toolbar;