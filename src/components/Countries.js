import React from 'react';
import Country from './Country';

const Countries = ({ result, weather, countries, showcountry, handleCountryChange }) => {

  const countryFiltered = countries.filter(country => 
    country.name.toLowerCase().includes(result.toLowerCase())) 

  if(countryFiltered.length === countries.length){
    return (
      <div></div>
    )
  }
  else if (countryFiltered.length ===1 ){
    handleCountryChange (countryFiltered[0].capital)
    return (
      <div key={countryFiltered[0].name}>
      <Country country ={countryFiltered[0]} weather ={weather} />
      </div>
    )
  }

  else if (countryFiltered.length <= 10 ){
    return (
      countryFiltered.map(country => 
        <div key={country.name}>
        <span>{country.name}</span>
        <button type="button" value={country.name} onClick={showcountry}>   show information about this country</button>
        </div>)
    )
  } 
  else {
    return (
      <div>Too many matches be more specific </div>
    )
  }
  

}
export default Countries;