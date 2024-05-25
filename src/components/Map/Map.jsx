import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import { Box, Typography, useMediaQuery } from '@mui/material'
import { Paper, MapContainer, MarkerContainer, Pointer } from './style.jsx';
import './style.jsx'
import mapStyles from './mapstyles.js';
function Map({places, coords, bounds, setBounds, setCoords, setChildClicked}) {
    // console.log('entered Map')
    // console.log('places in map',places)
    const matches = useMediaQuery('(min-width:600px)')
    

    return(
        <MapContainer>
            <GoogleMapReact 
            bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY}}
            defaultCenter={coords}
            center={coords}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={{disableDefaultUI:true, zoomControl:true, styles : mapStyles}}
            onChange={(e) => {
                // console.log('onchangegetcoords',e)
                setCoords({lat: e.center.lat, lng: e.center.lng})
                setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
            }}
            onChildClick={(child) => setChildClicked(child)}
            >
            {places?.map((place, i) => {
                if (place.name) {
                    return (
                    <MarkerContainer
                        key={i}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                    >
                        {!matches ? (
                        <LocationOnOutlinedIcon color="primary" fontSize="large" />
                        ) : (
                        <Paper>
                            <span>{place.name}</span>
                            <img
                            src={
                                place.photo
                                ? place.photo.images.large.url
                                : 'https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/chairs-cutlery-fork-9315.jpg?fit=1600%2C1063&ssl=1'
                            }
                            alt={place.name}
                            />
                            <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                        </Paper>
                        )}
                    </MarkerContainer>
                    );
                } else {
                    return null; // Skip rendering if place.name is not present
                }
                })}

            </GoogleMapReact>
        </MapContainer>
        
    )
}

export default Map