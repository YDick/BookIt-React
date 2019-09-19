import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";

import MainPage from "./components/googleMapsNpm/googleMaps";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// import AccountStuff from './components/accountStuffHOC/AccountStuff';
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import BookClubs from "./components/bookclub/BookClub";
import BookClubForm from "./components/bookclubform/BookClubForm";

// import CanadaPost from './components/googleMapsNpm/canadaPostSearch/canadaPost'
// import Person from './components/aboutUs/people/person'
import AboutUs from "./components/aboutUs/aboutUs";

import EmailFriends from "./components/email/EmailFriends";

import MyAccountHOC from "./components/my-account/myAccountHOC";
import MyBookclubs from "./components/myBookclubs/MyBookclubs";
import Footer from "./components/footer/footer"

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

            <Route exact path="/signout" render={() => <Redirect to="/" />} />

            <Route
              exact
              path="/"
              render={() =>
                !sessionStorage.JWT ? <Redirect to="/login" /> : <MainPage />
              }
            />
            <Route
              exact
              path="/home"
              render={() =>
                !sessionStorage.JWT ? <Redirect to="/login" /> : <MainPage />
              }
            />

            {/* <Route
              exact
              path="/home"
              render={() =>
                !sessionStorage.JWT ? (
                  <Redirect to="/login" />
                ) : (
                  <MainPage />
                )
              }
            /> */}

            <Route path="/aboutus" exact component={AboutUs} />

            <Route
              path="/login"
              exact
              render={props => (
                <Login
                  {...props}
                  logIn={this.logIn}
                  style={{ minHeight: "100%" }}
                />
              )}
            />
            <Route path="/signup" exact render={props => (
              <Signup
              {...props}
              logIn={this.logIn}
              style={{ minHeight: "100%" }}
            />
            )} />

            <Route path="/email" exact component={EmailFriends} />
            <Route path="/MyClubs" exact component={MyBookclubs} />
            <Route path="/MyAccount" exact component={MyAccountHOC} />
            <Route path="/bookclub/:id" exact component={BookClubs} />
          <Route path="/create/bookclub" exact component={BookClubForm} />
          </Switch>
          {/* < Footer /> */}
        </Router>
      </div>
    );
  }
}

export default App;
