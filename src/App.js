
import './App.css';
import * as React from 'react';
import {Map,Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import icon from '../public/imgs/office.png';
 import icon from './imgs/office.png';
 import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Map
      initialViewState={
        {
          longitude:73.089187,
          latitude:33.560784,
          zoom: 10
        }
      } 
      style={
        {
          width:600,
          height:400
        }
      }
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken='pk.eyJ1IjoibXRheXlhYm1pciIsImEiOiJjbDZuaWQ5Z3QwMTNyM2tsbGs2emtlc21uIn0.cwMj_2X3NoUdcbWnLGiG4g'
      >
        <Marker longitude={73.090830} latitude={33.560788} anchor="bottom" >
      <img src={icon} />
      
    </Marker>
    
 </Map>
    </div>
  );
}

export default App;
