// uses react-google-maps

import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';


export default (props) => {
  return (
    <GoogleMapLoader 
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap defaultZoom={9} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
    />
  )
}