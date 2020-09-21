import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

const Form = () => {

    const [dataHasReturned, setDataHasReturned] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [weatherData, setWeatherData] = useState({});

	const handleChange = event => {
        setUserInput(event.target.value);
    };

	const handleClick = async (event) => {
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=1e5d6dea25bc9c6cfdd4725176d486f3`
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
    
	return (
		<>
			{dataHasReturned === true ? <WeatherDisplay data={weatherData}/> : null}
			<form onSubmit={handleClick}>
				<input
					type="text"
					placeholder="city"
					onChange={handleChange}
                    value={userInput}
				></input>
				<button type="submit">Show me da weather!</button>
			</form>
		</>
	);
};

export default Form;
