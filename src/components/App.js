import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

// components
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";


const App = () => (
  <Router>
    <div className="container">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" render={() => <About title="About"/>}/> {/*we use render with inline components
                                                                    and this way we're abale to pass data to the component */}
      <Route path="/teachers" component={Teachers}/>
      <Route path="/courses" component={Courses}/>
      
    </div>
  </Router>
);

export default App;