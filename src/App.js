import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

import EmailFriends from './components/email/EmailFriends'



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
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />

          <Route path="/email" exact component={EmailFriends} />
        </Router>
      </div>
    );
  }
}

export default App;
