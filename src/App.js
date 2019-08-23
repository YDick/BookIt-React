import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from "./components/login/Login";



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
        </Router>
      </div>
    );
  }
}

export default App;
