import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone'
// import Rating from '@mui/material'


function PlaceDetails({ place, selected, refProp }) {
    // console.log('entered PlaceDetails',place.name)
    if (selected && refProp && refProp.current) {
        refProp.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    return(
        <>
            {place.name !== undefined && (
                <Card elevation={6}>
                <CardMedia
                style={{height:350}}
                image={place.photo ? place.photo.images.large.url : 'https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/chairs-cutlery-fork-9315.jpg?fit=1600%2C1063&ssl=1'}
                title={place.name} />
                <CardContent>
                    <Typography gutterBottom variant='h5'>{place.name}</Typography>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography component="legend">Price</Typography>
                        <Typography gutterBottom variant="subtitle1">
                            {place.price}
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography component="legend">Ranking</Typography>
                        <Typography gutterBottom variant="subtitle1">
                            {place.ranking}
                        </Typography>
                    </Box>
                    {place?.awards?.map((award)=>(
                        <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
                            <img src={award.images.small} alt={award.display_name}/>
                            <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
                        </Box>
                    ))}
                    {place?.cuisine?.map(({name}) => (
                        <Chip key={name} size='small' label={name} sx={{margin: '5px 5px 5px 0'}} />
                    ))}
                    {place.address && (
                        <Typography gutterBottom variant="body2" color="textSecondary" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px'}}>
                            <LocationOnIcon />{place.address}
                        </Typography>
                    )}
                    {place.phone && (
                        <Typography variant="body2" color="textSecondary" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <PhoneIcon /> {place.phone}
                        </Typography>
                    )}
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                    Website
                    </Button>
                </CardActions>
            </Card>
            )}
            
        </>
    )
}

export default PlaceDetails