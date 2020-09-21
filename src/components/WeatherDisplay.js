import React from 'react';

const WeatherDisplay = (props) => {

    const {data} = props;

    return (
        <>
        <h1>weather in {data.name}</h1>
        <h2>it is now {data.main.temp} degrees F</h2>
        </>
    )
}

export default WeatherDisplay;