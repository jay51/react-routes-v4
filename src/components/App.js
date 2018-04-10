import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// components
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";


const App = () => (
  <Router>
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={() => <About title="About"/>}/>
        <Route path="/teachers" component={Teachers}/>
        <Route path="/courses" component={Courses}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

export default App;

// A route with no path will always render
// A switch component will render the first path that match,if no match it will render path with no route.
