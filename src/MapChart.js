import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {Colorscale} from 'react-colorscales';
import ColorscalePicker from 'react-colorscales';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule
} from "react-simple-maps";

var Color = require('color');

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

const MapChart = () => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    csv(`/vulnerability.csv`).then(data => {
      setData(data);
    });
  }, []);

  return (

    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >
      <Geographies geography={geoUrl}>
          {({ geographies }) =>{
            return geographies.map(geo => {
              const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["occurence"]) : "#808080"}
                />
              );
            })}
          }
        </Geographies>
      )}
    </ComposableMap>


  );
};

export default MapChart;