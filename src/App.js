import React from 'react';
import './App.css';
import MainPage from './components/pages/mainPage'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
// import CanadaPost from './components/googleMapsNpm/canadaPostSearch/canadaPost'
import Person from './components/aboutUs/people/person'

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {currentUser: null};

  }
 
    

render() {
    return (
      <Router>
           <Switch>
           {/* <Route path = "/"
      exact render ={props =>  (
      <MainPage/>
      )}/> */}

<Route exact path="/" render={() => (
  sessionStorage.length === 0 ? (
    <Redirect to="/login"/>
  ) : (
    <MainPage/>
  )
)}/>
          <Route path="/person" exact component={Person} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
   

    </Switch>
    </Router>
)}
      


}

export default App;
