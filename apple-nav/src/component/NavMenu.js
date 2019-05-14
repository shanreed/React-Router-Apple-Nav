import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './NavMenu.css';

function NavMenu() {
    return (
      <div className= 'nav-menu'>
        <NavLink to = '/'><img src = '' alt = ''/></NavLink>
        <NavLink>Mac</NavLink>
        <NavLink>iPad</NavLink>
        <NavLink>iPhone</NavLink>
        <NavLink>Watch</NavLink>
        <NavLink>TV</NavLink>
        <NavLink>Music</NavLink>
        <NavLink>Support</NavLink>
        <NavLink><img src = '' alt = ''/></NavLink>
        <NavLink><img src = '' alt = ''/></NavLink>
      </div>
    );
  }
  
  export default NavMenu;