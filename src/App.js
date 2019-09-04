import React from 'react';
import './App.css';
import MainPage from './components/pages/mainPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Carousel from './components/googleMapsNpm/carousel/carousel'


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
          <Route path="/carousel" exact component={Carousel} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
   

    </Switch>
    </Router>
)}
      


}

export default App;
