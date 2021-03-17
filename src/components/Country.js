import React from 'react';

const Country = ({name, capital, population, languages, flags}) => {
  return(
    <div>
    <h1>{name}</h1>
    <p>Capital : {capital}</p>
    <p>Population: {population}</p>
    <p>Lanuages spoken: {languages}</p>

    </div>
  )

}
export default Country;