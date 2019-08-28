import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Form from "../mapForm/form";

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


  componentDidMount() {
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
            key: "AIzaSyC9YcNajcT4z5-USnDY-znyaf146i27YOU",
            Promise: Promise
          });
          googleMapsClient
            .geocode({
              address: `${(loginAddress.address_line1,
              loginAddress.address_line2,
              loginAddress.city,
              loginAddress.province,
              loginAddress.postal_code,
              loginAddress.country)}`
            })
            .asPromise()
            .then(response => {
              console.log(response.json.results);
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
        }
      })
      .catch(error => console.error("Error:", error));


      fetch("https://book-it.herokuapp.com/api/v1/book_clubs", {
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ sessionStorage.JWT
      }

    })
      .then(e => e.json())
      .then(data => {
        console.log(data)

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

  submit = () => {
    console.log();
    

    const googleMapsClient = require("@google/maps").createClient({
      key: "AIzaSyC9YcNajcT4z5-USnDY-znyaf146i27YOU",
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
        console.log("response!!!!!!!!!!!!!",response.json.results);
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
    return (
      <div style={{display: 'flex', flexDirection: 'flexEnd', flexWrap: 'wrap'}}>
        <Form submit={this.submit} 
        streetAddress = {this.state.streetAddress}
        city={this.state.city}
        postalCode={this.state.postalCode}
        dataChange={this.onInputChanges} />

{ this.state.lat && this.state.map}
    

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
            containerStyle={{width: '100%', height: '250px', position: 'relative'}}

            style={{
              height: "35vh",
              width: "35vh",
              // marginLeft: "800px",
              // marginRight: "auto",
              display: 'flex',
              justifyContent: "flexEnd"
          
            }}
            zoom={14}
          >
            {console.log(this.props.google)}

            
      {/* {this.state.markers.map((e,i)=> 
 <Marker key={i} onClick={this.onMarkerClick} 
 position={{lat: e.address.geo.lat, lng: e.address.geo.lng}} 
 title={e.address.street}
         name={e.address.city} />        )}

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow> */}
          </Map>
          
      )
        // </div>
        }
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyC9YcNajcT4z5-USnDY-znyaf146i27YOU"
})(GoogleMaps);
