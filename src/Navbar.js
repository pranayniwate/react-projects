import { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'


function Navbar() {
    
return(<>
    <nav className='nav-bar' id='nav-bar'>
        <ul>
            <li><NavLink to="/" className="link" >Color Generator</NavLink></li>
                 
            <li><NavLink to="/Games" className="link">Games</NavLink></li>

            <li><NavLink to="/List" className="link">to-do List</NavLink></li>

            <li><NavLink to="/User" className="link">User</NavLink></li>

            <li><NavLink to="/Menu" className="link">Menu</NavLink></li>
            
        </ul>
    </nav>
    </>
)
}

export default Navbar;