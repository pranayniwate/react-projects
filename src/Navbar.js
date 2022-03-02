import { useState } from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    const [active, setActive] = useState(null);

return(<>
    <nav className='nav-bar' id='nav-bar'>
        <ul>
            <li><Link to="/" onClick={() => setActive(0)} 
            className={active === 0 ? 'link clicked':'link'} >Color Generator</Link></li>
                 
            <li><Link to="/Games" onClick={() => setActive(1)}
            className={active === 1 ? 'link clicked' : 'link'}>Games</Link></li>

            <li><Link to="/List" onClick={() => setActive(2)}
            className={active === 2 ? 'link clicked' : 'link'}>to-do List</Link></li>

            <li><Link to="/User" onClick={() => setActive(3)}
            className={active === 3 ? 'link clicked' : 'link'}>User</Link></li>

            <li><Link to="/Menu" onClick={() => setActive(4)}
            className={active === 4 ? 'link clicked' : 'link'}>Menu</Link></li>
            
        </ul>
    </nav>
    </>
)
}

export default Navbar;