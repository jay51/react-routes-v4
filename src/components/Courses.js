import React from 'react';
import { NavLink, Route, Redirect } from "react-router-dom";
// components
import CSS from "./courses/CSS";
import HTML from "./courses/HTML";
import JavaScript from './courses/JavaScript';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`} >HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path={`${match.path}`} render={ ()=> <Redirect to={`${match.path}/html`}/>}/>
    <Route path={`${match.path}/html`} component={HTML} />
    <Route path={`${match.path}/css`} component={CSS} />
    <Route path={`${match.url}/javascript`} component={JavaScript} />

  </div>
);

export default Courses;

// clicking the courses NavLink, will Route you to Redirrect to hmtl component
// using match will make our routes more dynamic, such that now if we change the couress url it wont effect sub urls
// match.url & match.path are exactliy the same, we use url with the url link and path with the route 

