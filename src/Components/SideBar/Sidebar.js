import React from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom';
import sidebarIMG from '../../Components/Images/Image-1.jpg'

const Sidebar = (props) => {
    let sidebarClasses = 'side-bar';
    if(props.show) {
        sidebarClasses = 'side-bar open';
    }
    return(<nav className={sidebarClasses}>
    
        <ul>
            <li><img className='sb-img' src={sidebarIMG}/></li>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>           
        </ul>
        </nav>)
}

export default Sidebar;