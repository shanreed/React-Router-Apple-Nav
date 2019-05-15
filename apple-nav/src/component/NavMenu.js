import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './NavMenu.css';

function NavMenu() {
    return (
      <div className= 'nav-menu'>
        <NavLink className = 'link apple' to = '/'><i class='fab fa-apple'></i></NavLink>
        <NavLink className = 'link'>Mac</NavLink>
        <NavLink className = 'link'>iPad</NavLink>
        <NavLink className = 'link'>iPhone</NavLink>
        <NavLink className = 'link'>Watch</NavLink>        
        <NavLink className = 'link'>TV</NavLink>
        <NavLink className = 'link'>Music</NavLink>
        <NavLink className = 'link'>Support</NavLink>
        <NavLink className = 'link search'><i class="fa fa-search"></i></NavLink>
        <NavLink className = 'link shop'><i class='fas fa-shopping-bag'></i></NavLink>
      </div>
    );
  }
  
  export default NavMenu;