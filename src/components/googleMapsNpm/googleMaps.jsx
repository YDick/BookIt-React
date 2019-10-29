import React, { Component } from "react";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polygon
} from "google-maps-react";
import Form from "../mapForm/form";
import Carousel from "./carousel/carousel";
import CpForm from "../mapForm/canadaPost";
import { Link, BrowserRouter } from "react-router-dom";

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      lat: null,
      lng: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      streetAddress: "",
      city: "",
      postalCode: "",
      cpAddress: "",
      dropDownAddress: [],
      show: false,
      currentLocation: null
    };
  }
  // regular form
  onInputChanges = data => {
    switch (Object.keys(data)[0]) {
      case "streetAddress":
        this.setState({ streetAddress: data.streetAddress });
        break;
      case "city":
        this.setState({ city: data.city });
        break;
      case "postalCode":
        this.setState({ postalCode: data.postalCode });
        break;

      default:
        break;
    }
  };

  // canadaPost form
  cpDataChange = data => {
    this.setState({ cpAddress: data });
    if (data.length > 4) {
      fetch(
        `https://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws?key=JP81-DZ99-JU99-ZN53&SearchTerm=${this.state.cpAddress}`
      )
        .then(e => e.json())
        .then(e => {
          this.setState({ dropDownAddress: e, show: true }, () => {
            console.log("column state", this.state.dropDownAddress);
          });
        });
    }
  };

  // form click
  formClick = data => {
    this.setState({ cpAddress: data });
  };

  componentDidMount() {
    // current user:
    fetch("https://book-it.herokuapp.com/api/v1/current", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.JWT
      }
    })
      .then(e => e.json())
      .then(data => {
        console.log("Success:", data.current_user.address);
        var loginAddress = data.current_user.address;
        console.log("var", loginAddress);

        // To ensure form comes up if user has no location in db
        // if (loginAddress === null) {
        //   this.setState({ currentUserLocation: true });
        // }

        if (
          loginAddress.address_line1 &&
          loginAddress.city &&
          loginAddress.province &&
          loginAddress.postal_code &&
          loginAddress.country
        ) {
          const googleMapsClient = require("@google/maps").createClient({
            key: "API KEY",
            Promise: Promise
          });
          googleMapsClient
            .geocode({
              address: `${loginAddress.address_line1}
              ${loginAddress.city}
              ${loginAddress.province}
              ${loginAddress.postal_code}
              ${loginAddress.country}`
            })
            .asPromise()
            .then(response => {
              console.log(response.json.results);
              this.setState(
                {
                  lat: response.json.results[0].geometry.location.lat,
                  lng: response.json.results[0].geometry.location.lng,
                  currentLocation: {
                    lat: response.json.results[0].geometry.location.lat,
                    lng: response.json.results[0].geometry.location.lng
                  }
                },
                () => {
                  console.log("State::::", this.state.lat);
                }
              );
            });
        }
      })
      .catch(error => console.error("Error:", error));
    // Book clubs:
    fetch("https://book-it.herokuapp.com/api/v1/book_clubs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.JWT
      }
    })
      .then(e => e.json())
      .then(data => {
        let bookClubs = data.book_clubs;
        console.log("let", bookClubs);

        bookClubs.forEach(club => {
          const googleMapsClient = require("@google/maps").createClient({
            key: "API KEY",
            Promise: Promise
          });
          console.log(
            "Address::::",
            `${club.address.address_line1}  ${club.address.city}`,
            club
          );

          googleMapsClient
            .geocode({
              address: `${club.address.address_line1} ${club.address.city} ${club.address.postal_code} ${club.address.province}
                ${club.address.country}`
            })
            .asPromise()
            .then(response => {
              console.log("response!!!!!!!!!!!!!", response.json.results);
              let info = {
                lat: response.json.results[0].geometry.location.lat,
                lng: response.json.results[0].geometry.location.lng,
                bookClub: club
              };
              let dataCopy = this.state.markers;
              dataCopy.push(info);

              this.setState(
                {
                  markers: dataCopy
                },
                () => {
                  console.log("State::::", this.state.markers);
                }
              );
            });
        });
      })
      .catch(error => console.error("Error:", error));
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  submitCP = () => {
    const googleMapsClient = require("@google/maps").createClient({
      key: "API KEY",
      Promise: Promise
    });
    googleMapsClient
      .geocode({
        address: `${this.state.cpAddress}`
      })
      .asPromise()
      .then(response => {
        console.log("response!!!!!!!!!!!!!", response.json.results);
        this.setState(
          {
            lat: response.json.results[0].geometry.location.lat,
            lng: response.json.results[0].geometry.location.lng,
            show: false,
            currentLocation: {
              lat: response.json.results[0].geometry.location.lat,
              lng: response.json.results[0].geometry.location.lng
            }
          },
          () => {
            console.log("State::::", this.state.lat);
          }
        );
      });
  };

  submit = () => {
    console.log();

    const googleMapsClient = require("@google/maps").createClient({
      key: "API KEY",
      Promise: Promise
    });
    googleMapsClient
      .geocode({
        address: `${(this.state.streetAddress,
        this.state.city,
        this.state.postalCode)}`
      })
      .asPromise()
      .then(response => {
        console.log("response!!!!!!!!!!!!!", response.json.results);
        this.setState(
          {
            lat: response.json.results[0].geometry.location.lat,
            lng: response.json.results[0].geometry.location.lng
          },
          () => {
            console.log("State::::", this.state.lat);
          }
        );
      });
  };

  render() {
    console.log(this.state.selectedPlace, "selected place!!");
    return (
      <div
      // style={{ display: "flex", flexDirection: "flexEnd", flexWrap: "wrap" }}
      >
        <CpForm
          cpDataChange={this.cpDataChange}
          value={this.state.cpAddress}
          submitCP={this.submitCP}
          formClick={this.formClick}
          formOptions={this.state.dropDownAddress}
          dropDown={this.dropDown}
          show={this.state.show}
        />
        <br />
        {/* <Form
          submit={this.submit}
          streetAddress={this.state.streetAddress}
          city={this.state.city}
          postalCode={this.state.postalCode}
          dataChange={this.onInputChanges}
        /> */}
        <br />
        <br />
        {this.state.lat && this.state.map}
        {this.state.lat === null && <h1>Loading...</h1>}
        {this.state.lat != null && (
          <Map
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
              position: "relative"
              // display: "flex",
              // justifyContent: "flexEnd"
            }}
            style={{
              height: "79vh",
              width: "150vh",

              marginLeft: "auto",
              marginRight: "auto"
              // display: "flex",
              // justifyContent: "center"
            }}
            zoom={15}
          >
            {this.state.markers.map((e, i) => (
              <Marker
                id={e.bookClub.id}
                key={i}
                onClick={this.onMarkerClick}
                position={{ lat: e.lat, lng: e.lng }}
                title={`${e.bookClub.address.address_line1}`}
                name={e.bookClub.name}
              />
            ))}

            <Marker
              style={{ color: "blue", backgroundColor: "black" }}
              onClick={this.onMarkerClick}
              icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
              position={{
                lat: this.state.currentLocation.lat,
                lng: this.state.currentLocation.lng
              }}
              title="Your Location"
              name="Your Location"
            />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                {this.state.selectedPlace.name !== "Your Location" ? (
                  <BrowserRouter>
                    <Link to={"/bookclub/" + this.state.selectedPlace.id}>
                      {" "}
                      <h3>{this.state.selectedPlace.name}</h3>{" "}
                    </Link>
                  </BrowserRouter>
                ) : (
                  <h3> {this.state.selectedPlace.name} </h3>
                )}
              </div>
            </InfoWindow>
          </Map>
        )}
        <Carousel />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "API KEY"
})(GoogleMaps);
