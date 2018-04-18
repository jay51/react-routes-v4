import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// components
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import Featured from "./Featured";
import NotFound from "./NotFound";


const App = () => (
  <Router>
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={() => <About title="About"/>}/>
        <Route exact path="/teachers" component={Teachers}/>
        <Route path="/teachers/:topic/:name?" component={Featured}/>
        <Route path="/courses" component={Courses}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

export default App;

