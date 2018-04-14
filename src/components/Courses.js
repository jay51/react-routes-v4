import React from 'react';
import { NavLink, Route, Redirect } from "react-router-dom";
// components
// CoursesContainer genrate proper course when passed data props.
import CoursesContainer from "./courses/CoursesContainer";
// courses 
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';


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
    <Route path={`${match.path}/html`} render={() => <CoursesContainer data={HTMLCourses} />} />
    <Route path={`${match.path}/css`} render={()=> <CoursesContainer data={CSSCourses} />} />
    <Route path={`${match.url}/javascript`} render={()=> <CoursesContainer data={JSCourses} />} />

  </div>
);

export default Courses;


// we use render with inline components for better proformince.
// inside render we can invoke and pass props to a commponent.
