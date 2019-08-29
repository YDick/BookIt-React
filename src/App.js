import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navBar/navBar'
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Router>
      </div>
    );
  }
}

export default App;
