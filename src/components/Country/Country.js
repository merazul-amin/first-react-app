import React from 'react';
import './Country.css'

const Country = (props) => {
    const { region, capital, name, flags } = props.country;
    return (
        <div className='country bg-primary'>
            <h1>Name: {name.common} </h1>
            <h3>Capital: {capital} </h3>
            <img src={flags.png} alt="" />
            <p>Region: {region} </p>
        </div>
    );
};

export default Country;