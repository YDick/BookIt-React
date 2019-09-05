import React from "react";
import Bookclub from "./components/BookClub/BookClub";
import { getBookClub } from "./services/webService";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubData: null
    };
  }

  componentDidMount() {
    getBookClub(11)
      .then(e => e.json())
      .then(e => {
        console.log(e);
        
        this.setState({ clubData: e })});
  }

  render() {
    let bookClub = null;
    if (this.state.clubData != null) {
      bookClub = <Bookclub  {...this.state.clubData} />
    }
    return (
    <div className="App">
    {bookClub}
    </div>);
  }
}

export default App;
