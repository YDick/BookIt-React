import React from "react";
import "./App.css";

import AccountStuff from "./components/accountStuffHOC/AccountStuff";
import NavBar from "./components/navBar/navBar";

import MainPage from "./components/pages/mainPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// import AccountStuff from './components/accountStuffHOC/AccountStuff';
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
// import CanadaPost from './components/googleMapsNpm/canadaPostSearch/canadaPost'
// import Person from './components/aboutUs/people/person'
import AboutUs from "./components/aboutUs/aboutUs";

import EmailFriends from "./components/email/EmailFriends";



import MyAccountHOC from "./components/my-account/myAccountHOC";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  logIn = () => {
    this.setState({
      loggedIn: true
    });
  };

  logOut = () => {
    this.setState({
      loggedIn: false
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar logOut={this.logOut} />

          <Switch>
            {/* need home route in addition to "/" route for navBars active links */}

            <Route path="/home" exact component={Signup} />

            <Route exact path="/signOut" render={() => <Redirect to="/" />} />

            <Route
              exact
              path="/"
              render={() =>

                !sessionStorage.JWT ? (

                  <Redirect to="/login" />
                ) : (
                  <MainPage />
                )
              }
            />


            <Route
              exact
              path="/home"
              render={() =>
                !sessionStorage.JWT ? (
                  <Redirect to="/login" />
                ) : (
                  <MainPage />
                )
              }
            />

            <Route path="/aboutus" exact component={AboutUs} />


            <Route
              path="/login"
              exact
              render={props => <Login {...props} logIn={this.logIn} />}
            />
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
