import React, {useState, useEffect} from 'react';

const WeatherDisplay = (props) => {

    const {data, units} = props;
    const [gif, setGif] = useState('');
    const [oldSearch, setOldSearch] = useState('');

    useEffect(() => {
        (async function loadGIF() {
            const newSearch = data.weather[0].description;
            if (oldSearch !== newSearch) {
                setOldSearch(newSearch);
                    try {
                        const res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XOy8SRMAxwNdnobga58QSe5vBRJexQel&s=${newSearch}`, {
                            mode: 'cors'
                          });
                        const json = await res.json();
                        setGif(json.data.images.original.url);
                    } catch (err) {
                        console.error(err);
                    }
                }
        })();
      });

    return (
        <>
        <div className="weatherCard">
        <h1>weather in {data.name}</h1>
        <h2>it is now {data.main.temp} degrees {(units === 'imperial' ? 'F' : 'C')}</h2>
        <h2>the weather is kinda like {data.weather[0].description}</h2>
        <p>It probably feels like this:</p>
        </div>
        <img src={gif} alt="a gif"></img>
        </>
    )
}

export default WeatherDisplay;