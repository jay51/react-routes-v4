import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{background:"tomato"}}>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;


// NavLink by default take the active class.
// active class will apply on the NavLink when the url matchs. 
// Note: NavLink only have to match what's inside of "to" unless you add exact prop.
