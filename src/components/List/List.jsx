import React from 'react'
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@mui/material'
import BasicSelect from './style'

function List({places, childClicked, isLoading, type, rate, setType, setRating}) {
    console.log('entered List')
    return(
        <>
            <div>
                <Typography variant='h4' sx={{marginTop:'10px'}}>Restaurants, Hotels & Attractions around you</Typography>
                <BasicSelect places={places} childClicked={childClicked} isLoading={isLoading} type={type} rate={rate} setType={setType} setRating={setRating} />
            </div>
        </>
    )
}

export default List