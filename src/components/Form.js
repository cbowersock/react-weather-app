import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

const Form = () => {

    const [dataHasReturned, setDataHasReturned] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [unit, setUnit] = useState('imperial');

	const handleChange = event => {
        setUserInput(event.target.value);
    };

	const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=${unit}&appid=1e5d6dea25bc9c6cfdd4725176d486f3`
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setWeatherData(data);
        } catch (err) {
            console.error(err);
        }
		setDataHasReturned(true);
    };

    const handleClick = event => {
        const {id} = event.target;
        setUnit(id);
    }
    
	return (
		<>
			{dataHasReturned === true ? <WeatherDisplay data={weatherData} units={unit}/> : null}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="city"
					onChange={handleChange}
                    value={userInput}
				></input>
                <br/>
                <label>Fahrenheit</label>
                <input
                    type="radio"
                    id="imperial"
                    name="units"
                    checked
                    onClick={handleClick}>
                </input>
                <br/>
                <label>
                    Celsius
                </label>
                <input
                    type="radio"
                    id="metric"
                    name="units"
                    onClick={handleClick}>
                </input>
				<button type="submit">Show me da weather!</button>
			</form>
		</>
	);
};

export default Form;
