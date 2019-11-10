import React from "react";
import { getBookClub, currentUser } from "../../services/webService";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class BookClub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    let Luser = null;
    if (currentUser() !== "NO TOKEN") {
      currentUser()
        .then(u => u.json())
        .then(t => {
          console.log(t);
          Luser = t.current_user;
        console.log(Luser,'luser')
        });
    }

    getBookClub(this.props.match.params.id)
      .then(e => e.json())
      .then(e => {

        // const googleMapsClient = require("@google/maps").createClient({
        //   key: "API KEY",
        //   Promise: Promise
        // });

        // googleMapsClient
        //   .geocode({
        //     address: `${e.book_club.address.address_line1} ${e.book_club.address.city}`
        //   })
        //   .asPromise()
          // .then(response => {
            setTimeout(
              () => {
                  this.setState({position: 1});
                  this.setState({
                    data: e,
                    // lat: response.json.results[0].geometry.location.lat,
                    // lng: response.json.results[0].geometry.location.lng,
                    Luser
                  });
              },
              300
          );
          // });
      });
  }

  render() {
    let users = null;
    let admin = null;
    let message = "";
    let btn = false;
    if (this.state.data !== null) {
      let lat = "";
      let lng = "";
      if (this.state.data.users.length > 0) {
        users = this.state.data.users.map((e, i) => (
          <ListGroup.Item key={i}>{e.name}</ListGroup.Item>
        ));


 


         this.state.data.users.forEach(element => {
           if (element.email === this.state.Luser.email) {
             btn = true;
           }
         });
      }

      if (this.state.data.admins.length > 0) {
        admin = this.state.data.admins.map((e, i) => (
          <ListGroup.Item key={i}>{e.name}</ListGroup.Item>
        ));
      }

      message = (
        <React.Fragment>
          <Card style={{ width: "28rem", margin: "auto" }}>
            <Card.Img variant="top" src={this.state.data.book_club.image_url} />
            <Card.Header>Welcome to</Card.Header>
            <Card.Body>
              <Card.Title>{this.state.data.book_club.name}</Card.Title>
              <Card.Text>
                {this.state.data.book_club.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis feugiat "}
              </Card.Text>

              <div>
                <div style={{ float: "left" }}>
                  {users !== null ? <h3>USERS::</h3> : null}
                  <ListGroup variant="flush">{users}</ListGroup>
                </div>
                <div style={{ float: "right" }}>
                  {admin !== null ? <h3>ADMIN::</h3> : null}
                  <ListGroup variant="flush">{admin}</ListGroup>
                </div>
              </div>
            </Card.Body>

            {btn ? (
              <Button variant="primary">Leave</Button>
            ) : (
              <Button variant="primary">Join</Button>
            )}

            <Card.Footer className="text-muted">
              {`${this.state.data.book_club.address.address_line1} ${this.state.data.book_club.address.city} `}
            </Card.Footer>
          </Card>

          {/* <Map 
            onClick={this.onMapClick}
            google={this.props.google}
            initialCenter={{
              lng: this.state.lng,
              lat: this.state.lat
            }}
            center={{
              lng: this.state.lng,
              lat: this.state.lat
            }}
            containerStyle={{
              width: "100%",
              height: "50px",
              position: "relative",
              // display: "flex",
              // justifyContent: "flexEnd"
            }}
            style={{
              height: "79vh",
              width: "150vh",

              marginLeft: "auto",
              marginRight: "auto",
              marginTop: '3%'
              // display: "flex",
              // justifyContent: "center"
            }}
            zoom={15}
          >
            <Marker
              onClick={this.onMarkerClick}
              position={{ lat: this.state.lat, lng: this.state.lng }}
              title={this.state.data.book_club.name}
              name={"hi"}
            />
          </Map> */}
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </React.Fragment>
      );
    } else {
      message = <div>Loading......</div>;
    }

    return <div>{message}</div>;
  }
}


export default GoogleApiWrapper({
  apiKey: "API KEY"
})(BookClub);
