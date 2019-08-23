import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/pages/mainPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {};
  }

render() {

    return (
      <Router>
           <Switch>
           <Route path = "/"
      exact render ={props => (
      <MainPage/>
      )}/>
    </Switch>
    </Router>
)}
      
}

export default App;
