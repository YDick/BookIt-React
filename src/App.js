import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            {/* need home route in addition to "/" route for navBars active links */}
            <Route path="/home" exact component={Signup}/>
            <Route  path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
