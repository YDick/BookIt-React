import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      lat: null,
      lng: null ,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
     
    };
  }

  

  componentDidMount() {
    
// var urlUsers = 'https://book-it.herokuapp.com/api/v1/users'
    fetch('http://localhost:3000/api/v1/users')

    .then(response => response.json())
    .then(json =>{ console.log("user",json.users[1].address)
    var userAd = json.users[1].address
     
    console.log("hey address", json.users[1].address.address_line1,userAd.address_line2, userAd.city )
      // this.setState({lat: json.address.geo.lat,
      // lng:json.address.geo.lng})

      const googleMapsClient = require('@google/maps').createClient({
        key: 'AIzaSyC9YcNajcT4z5-USnDY-znyaf146i27YOU',
        Promise: Promise
      });
       
      googleMapsClient.geocode({address:`${json.users[1].address.address_line1,userAd.address_line2, userAd.city}` })
        .asPromise()
        .then((response) => {
          console.log(response.json.results);
          this.setState({
            lat:        response.json.results[0].geometry.location.lat,
              lng:        response.json.results[0].geometry.location.lng
      
          }, () => {console.log("State::::",this.state.lat)});
           
        })
        .catch((err) => {
          console.log(err);
        });

      
  })
  }
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  
  
  render() {

    
    return (
      <div>
        {this.state.lat != null &&
      <Map 
      onClick={this.onMapClick} 
      google={this.props.google} 
      initialCenter={{
        lng: this.state.lng , 
        lat: this.state.lat      
      }}
      style={{height: '300px', width: '300px'}}
      zoom={14}>
      {console.log(this.props.google)}
      

{/* 
      {this.state.markers.map((e,i)=> 
 <Marker key={i} onClick={this.onMarkerClick} 
 position={{lat: e.address.geo.lat, lng: e.address.geo.lng}} 
 title={e.address.street}
         name={e.address.city} />        )} */}

<InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>


    </Map>
    // </div>
        }
        <h1>Hey</h1>

</div>
    )
  }
}
export default GoogleApiWrapper({
  // apiKey: ("AIzaSyC9YcNajcT4z5-USnDY-znyaf146i27YOU")
})(GoogleMaps)