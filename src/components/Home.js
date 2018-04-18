import React, { Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {    
  constructor(props){
    super(props);
    this.state = {
      firstName:"neno",
      lastName:"jay"

    } 

  }

// use inline function beacuse inline functions are bound to the class
// or use a black function and bind it to the class using the bind() method.
  handelSubmit =  (e) => {

    e.preventDefault();
    const name = this.teacherName.value;
    const topic = this.teacherTopic.value;
    const path = `/teachers/${topic}/${name}`;
    this.props.history.push(path);
  }

  onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]:value
    },console.log(this.state))
  }

  
  render() {
    return (
      <div className="main-content home">
        <h2>Front End Course Directory</h2>
        <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
        <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
        <hr />
        <h3>Feautred teachers</h3>
        <Link to="/teachers/javascript/Jay "> Jay Geen </Link>
        <hr/>


        <form onSubmit={this.handelSubmit}>
        <input type="text" placeholder="Name" ref={(input)=>this.teacherName = input}/>
        <input type="text" placeholder="Topic" ref={(input)=>this.teacherTopic = input}/>
        {/* also wanted to throw in here how to controle multiple inputs in React */}
        <input type="text" placeholder="FirsName" name="firstName" onChange={this.onChange} value={this.state.firstName}/>
        <input type="text" placeholder="LastName" name="lastName" onChange={this.onChange} value={this.state.lastName}/>

        <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default Home;


// "ref" attribute when used on a dom element, it takes a callback that recives the underlying
// dom element as its argument and assign it to a class variable as soon as the component render. 

// Note: every component that render through the Route component in react-router gets passed
// 3 object [match,history,loaction]

// history stack is what enable you to navigate a website using back and forword buttons and keeping everything in sync.
// or even change the path using push() method.

 


