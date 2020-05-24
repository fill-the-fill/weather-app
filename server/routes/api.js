const express = require('express');
const router = express.Router();
const axios = require(`axios`);
const City = require(`../../server/models/City`);

router.get(`/city/:cityName`, async function(req, res) {
    try {

    const cityName = req.params.cityName;
    const apiKey = "66c96b87feccc7d3f42729fb5fadd783";
    let Info = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
    let data = {
        name: Info.data.name,
        temperature: Info.data.main.temp,
        condition: Info.data.weather[0].description,
        picture: Info.data.weather[0].icon,
    } 
        res.send(data);
    
      } catch (error) {
      console.error(error)
    }
})

router.get(`/cities`, async function(req, res) {
      let citiesData = await City.find({});
      res.send(citiesData);
    });
  
  router.post(`/city`, async function(req, res) {
      let cityData = req.body;
      let city = new City(cityData);
      await city.save();
      res.end();
    });
  
  router.delete(`/city/:cityName`, async function(req, res) {
      const cityName = req.params.cityName;
      await City.findOneAndDelete({ name: cityName});
      res.end();
  });

module.exports = router;