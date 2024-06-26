import React from 'react';

import {MapContainer as LeafletMap, TileLayer} from 'react-leaflet'; 
import "./Map.css"
import { showDataOnMap } from '../../Pages/util';

function Map({countries, casesType,center, zoom}) {
	return (
		<div className="map">
			<LeafletMap center={center} zoom={zoom} >
			<TileLayer
	      		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	      		attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
	    		/>
	    		 {showDataOnMap(countries, casesType).map((element, index) => (
                    <div key={index}>{element}</div>
                ))}
	    	</LeafletMap>
		</div>
	)
}

export default Map;