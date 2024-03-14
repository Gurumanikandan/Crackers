import React from 'react'
import './Navbar.css'
import adminpanel from '../../assets/admin_panel.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <p>Crackers Admin   <img src={adminpanel} alt='' className='nav_profile' /></p>
            </div>
        </div>
    )
}

export default Navbar;