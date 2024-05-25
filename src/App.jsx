import { CssBaseline, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { getPlacesData } from './api'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'


function App() {
  console.count('count of renders')

  const [places, setPlaces] = useState([])
  // console.log('places in useState',places)

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  // console.log('filteredPlaces in useState',filteredPlaces)

  const [childClicked, setChildClicked] = useState(null)
  // console.log('childs in useState',childClicked)

  const [coords, setCoords] = useState({})
  // console.log('coords in useState',coords)

  const [bounds, setBounds] = useState({})
  // console.log('bounds in useState',bounds)

  const [isLoading, setIsLoading] = useState(false)

  const [type, setType] = useState('restaurants');
  const [rate, setRating] = useState('');

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((position) => {
      // const { latitude, longitude } = position.coords;
      // console.log('first useEffect called')
      // rather than getting current set to Hyderabad
    // });
    setCoords({ lat: 17.385044, lng: 78.486671 });
  }, []);

  // console.log('after setcoords',coords)

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rate);

    setFilteredPlaces(filtered);
  }, [rate]);

  useEffect(() => {
      setIsLoading(true)

      getPlacesData(type, bounds.sw, bounds.ne).then((data)=>{
        // console.log('second useEffect called')
        // console.log('got data',data)
        // console.log('type==',type)
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0))
        setFilteredPlaces([])
        setRating('')
        setIsLoading(false)
        })
    
  },[bounds, type])
  
  return (
    <>
        <CssBaseline />
        <Header setCoords={setCoords}/>
        <Grid container spacing={3} style={{ width: '100%'}}>
          <Grid item xs={12} md={4}>
            <List places={places} childClicked={childClicked} isLoading={isLoading} type={type} setType={setType} rate={rate} setRating={setRating}/>
          </Grid>
          <Grid item xs={12} md={8}>
            <Map places={places} setBounds={setBounds} setCoords={setCoords} coords={coords} bounds={bounds} setChildClicked={setChildClicked}/>
          </Grid>
        </Grid>
        
    </>
  )
}

export default App
