import React , {useState, useEffect } from 'react';
import InputField from './components/InputField';
import axios from 'axios';
import Countries from './components/Countries'
const key = process.env.access_key;

const App = () => {

  //Application's State
  const [countries, setCountries] = useState([])
  console.log('coountries', countries)
  const [capital, setCapital] = useState('Helsinki')
  const [weather, setWeather] = useState([])
  const [search, setSearch] = useState('');
  console.log("Search", search)
  const [query, setQuery] = useState('');


  //Application's effect
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${key}&query=${capital}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [query, capital])

  //Application handlers
  const handleQueryChange = e => setQuery(e.target.value)

  const handleSearchChange = e => {
    if(weather.hasOwnProperty('error')){
      alert(`${weather.error.type}`)
    }
    else{
      setSearch(e.target.value)
    } 
  }
  
  const showCountry = e => {
      e.preventDefault()
      setSearch(e.target.value);
    };

  const handleCountryChange = (capital) => setCapital(capital)


  return (
    <div>
    <InputField 
    text= "First enter the access key to get data"
    value={query}
    onChange={handleQueryChange}
    />
    <InputField 
    text= "Find countries"
    value={search}
    onChange={handleSearchChange}
    />
    <div className ="country-info">
    <Countries
    result ={search}
    weather={weather}
    countries = {countries}
    showcountry={showCountry}
    handleCountryChange={handleCountryChange}
    />
    </div>
    </div>
    
    );
}
export default App;
