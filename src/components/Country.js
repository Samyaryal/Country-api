import React from 'react';

const Country = ({name, capital, population, languages, flags}) => {
  return(
    <div>
    <h1>{name}</h1>
    <p>Capital : {capital}</p>
    <p>Population: {population}</p>
    <p>Lanuages spoken:</p>
    <ul>{languages.map(language => 
      <li key={language.name}>{language.name}</li>)}
    </ul>

    </div>
  )

}
export default Country;