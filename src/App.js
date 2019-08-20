import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/googleMapsNpm/googleMaps'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      data: {}};
  }

render() {
    return (
    <div>
<Map/>
    </div>
      )}
}

export default App;
