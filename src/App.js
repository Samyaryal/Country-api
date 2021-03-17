import React , {useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value);
  };
   
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div>
    <form onSubmit = {getSearch} />
    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
    <button className="search-button" type="submit">Search</button>
    <div className ="country">
    {countries.map(country => (
      <Country 
      name={country.name}
      capital={country.capital}
      population={country.population}
      languages={country.languages}
      flags ={country.flags}
      />
    ))}
    </div>
    </div>
    
    );
}
export default App;
