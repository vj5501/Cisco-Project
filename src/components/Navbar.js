import React from "react";  
import {NavLink} from 'react-router-dom'

const NavBar = () => (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="/">Cisco Netacad</a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="py-3 px-0 px-lg-3 rounded" href='/'><NavLink className='text-link' to="/">Home</NavLink></a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="py-3 px-0 px-lg-3 rounded" href='/'><NavLink className='text-link' to="/team">Team</NavLink></a></li>
          </ul>
        </div>
    </nav>
)

export default NavBar;