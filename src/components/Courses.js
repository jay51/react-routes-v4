import React from 'react';
import { NavLink, Route, Redirect } from "react-router-dom";
// components
import CSS from "./courses/CSS";
import HTML from "./courses/HTML";
import JavaScript from './courses/JavaScript';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path="/courses" render={ ()=> <Redirect to="/courses/html"/>}/>
    <Route path="/courses/html" component={HTML} />
    <Route path="/courses/css" component={CSS} />
    <Route path="/courses/javascript" component={JavaScript} />

  </div>
);

export default Courses;

// we include "exact" in the first route beacuse, if you click on the courses link it will take
// you to this component and since the route match it won't rerender the first route that
// redirect you to "/courses/html".

// clicking the courses NavLink, will Route you to Redirrect to hmtl component