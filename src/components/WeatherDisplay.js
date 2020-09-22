import React from 'react';

const WeatherDisplay = (props) => {

    const {data, units} = props;

    return (
        <>
        <h1>weather in {data.name}</h1>
        <h2>it is now {data.main.temp} degrees {(units === 'imperial' ? 'F' : 'C')}</h2>
        </>
    )
}

export default WeatherDisplay;