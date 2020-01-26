import React, { useState, useEffect } from "react";
import axios from "axios";


function Weather() {
    const [weather, setWeather] = useState(null);

    //make api call after delay for animation
    async function fetchData() {
        console.log("making an api call");
        const res = await fetch(
            "https://api.nasa.gov/insight_weather/?api_key=bY15mk1n7EWfQffSIbbCFSN4PKJgeBlZRlHXEPOd&feedtype=json&ver=1.0"
        );
        const json = await res.json();
        console.log("json retrieved", json);
        setWeather(json);
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(weather);

    if (weather === null) return <p>Loading...</p>;

    return (
        <div id ="grid">
        <div className="card-columns">
            {weather.sol_keys.map((key, index) => {
                console.log("key", key, index);
                return (
                    <div className= "card" key={index}>
                        <h1>Sol {key} </h1>
                        <p>Average Min. Temperature{" "}{JSON.stringify(weather[key].AT.mn)}</p>
                        <p>Average Max. Temperature {JSON.stringify(weather[key].AT.mx)}{" "}</p>
                        
                    </div>
                );
            })}
        </div>
    </div>
    );
}

export default Weather;

