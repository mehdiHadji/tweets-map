import React from 'react';
import './App.css';
import MapChart from "./MapChart";
import {Colorscale} from 'react-colorscales';
import ColorscalePicker from 'react-colorscales';

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps"


const viridisColorscale = ["#FFEDEA","#FFD1C9","#FFB5A7","#FF9886","#FF6E54","#FF0000"];


function App() {
  return (
     <div>
          <div style={{
            position: "fixed",
            fontSize: "20px",
            "marginTop": "3%",
            "marginLeft": "10%"
           }}>
            Tweets per country (%)
          </div>
        <div  style={{
            position: "fixed",
            width: "75%",
            "marginTop": "5%",
            "marginLeft": "10%"
           }}>
           <Colorscale colorscale={viridisColorscale} onClick={() => {}} width={150}  />
        </div>

      <MapChart />
      



    </div>
  );
}


export default App;
