
import React from 'react';
import './App.css';
import AccountStuff from './components/accountStuffHOC/AccountStuff';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from "./components/navBar/navBar";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";


import EmailFriends from './components/email/EmailFriends'


import MyAccountHOC from './components/my-account/myAccountHOC';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }

  logIn=()=>{
    this.setState({
      loggedIn: true
    })
  }

  logOut=()=>{
    this.setState({
      loggedIn: false
    })
  }

  render(){

    return (
      <div className="App">
   
        <Router>



         

          <NavBar />
          <AccountStuff logOut={this.logOut}/>
      
          <Switch>
            {/* need home route in addition to "/" route for navBars active links */}
            <Route path="/home" exact component={Signup}/>
      
           <Route path="/login" exact 
                 render={props => <Login {...props} logIn={this.logIn} />} />
          <Route path="/signup" exact component={Signup} />


          <Route path="/email" exact component={EmailFriends} />

          <Route path="/MyAccount" exact component={MyAccountHOC} />
            
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
