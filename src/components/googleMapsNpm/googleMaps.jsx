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

</div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyC9YcNajcT4z5-USnDY-znyaf146i27YOU")
})(GoogleMaps)