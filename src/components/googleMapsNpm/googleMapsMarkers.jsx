import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

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
      postalCode: ""
    };
  }

  componentDidMount() {
   
    fetch("RAILS API ROUTE", {
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
          googleMapsClient
            .geocode({
              address: `${(club.address.address_line1,
              club.address.address_line2,
              club.address.city)}`
            })
            .asPromise()
            .then(response => {
              console.log("response!!!!!!!!!!!!!", response.json.results);
              let info = {
                lat: response.json.results[0].geometry.location.lat,
                lng: response.json.results[0].geometry.location.lng,
                bookClub: club
              };
              let dataCopy = this.state.markers
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

  

  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "flexEnd", flexWrap: "wrap" }}
      >

      


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
              height: "250px",
              position: "relative"
            }}
            style={{
              height: "35vh",
              width: "35vh",
              display: "flex",
              justifyContent: "flexEnd"
            }}
            zoom={14}
          >
            

            {this.state.markers.map((e, i) => (
              <Marker
                key={i}
                onClick={this.onMarkerClick}
                position={{ lat: e.lat, lng: e.lng }}
                title={`${e.bookClub.address.address_line1}  ${e.bookClub.address.address_line2}`}
                name={e.bookClub.address.city}
              />
            ))}
            
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        )
        }
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "API KEY"
})(GoogleMaps);
