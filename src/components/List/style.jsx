import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect, createRef } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import {CircularProgress, Grid } from '@mui/material';
// import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function BasicSelect({places, childClicked, isLoading, type, rate, setType, setRating}) {

  // console.log('withbracket childclick',{childClicked})
  // gave info when clicked on child i.e object
  // console.log('withoutbracket childclick',childClicked)
  // gave info when clicked on child i.e number

  const [elRefs, setElRefs] = useState([])
  // console.log('elrefs==',elRefs)

  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  },[places]);

  // const places = [
  //   {name : 'Cool Place'},
  //   {name : 'Best Beer'},
  //   {name : 'Best Steak'},
  //   {name : 'Cool Place'},
  //   {name : 'Best Beer'},
  //   {name : 'Best Steak'},
  //   {name : 'Cool Place'},
  //   {name : 'Best Beer'},
  //   {name : 'Best Steak'}
  // ]

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handlerate = (event) => {
    setRating(event.target.value);
  };

  return (
    <>
      {isLoading ? (
        <div>
            <CircularProgress size="5rem" />
        </div>
        ) : (
        <div sx={{ margin:'20px', gap:'20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl style={{ marginRight: '10px', flex: 1 }}>
                    <InputLabel id="type">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="type"
                        value={type}
                        label="Type"
                        onChange={handleChange}
                    >
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={{ marginLeft: '10px', flex: 1 }}>
                    <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={rate}
                        label="rate"
                        onChange={handlerate}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="3">Above 3.0</MenuItem>
                        <MenuItem value="4">Above 4.0</MenuItem>
                        <MenuItem value="4.5">Above 4.5</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Grid container spacing={1} sx={{height: '75vh', overflow: 'auto', margin:'10px'}}>
                {places?.map((place,i)=>(
                    <Grid ref={elRefs[i]} item key={i} xs={12}>
                        <PlaceDetails place={place} selected={Number(childClicked) === i} refProp={elRefs[i]}/>
                    </Grid>
                ))}
            </Grid>
        </div>
      )}
    </>
  );
}
