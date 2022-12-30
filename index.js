const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const places = require('./data/places.json');
const hotels = require('./data/hotels.json');

app.get('/', (req, res) => {
    res.send('Hello Tour');
})

app.get('/places', (req, res) => {
    res.send(places);
})

app.get('/booking/:id', (req, res) => {
    const id = req.params.id;
    const selectedPlace = places.find( place => place.id === id);
    res.send(selectedPlace);
})

app.get('/hotels/:name', (req, res) => {
    const name = req.params.name;
    const selectHotel = hotels.filter( hotel => hotel.place_name === name);
    res.send(selectHotel)
})

app.listen(port, () => {
    console.log(`Tour place on ${port}`)
})