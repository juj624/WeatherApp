import { useState } from "react";
import DisplayWeather from "../components/DisplayWeather";


function Home() {

    const APIKEY = "9c269693b4b9a53b83d8c1c2dfa761d2";


    const [weather, setWeather] = useState({})

    // function asynchrone effectuer pour l'api


    async function weatherData(e) {

        e.preventDefault()
        if (weather.city === "") {
            alert("Add values")
        } else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather.city},${weather.country}&appid=${APIKEY}`)
                .then((res) => res.json());

            setWeather({

                data: data,
            });
        }
    }


    // getPosts();



    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        if (name === "city") {
            setWeather({ ...weather, city: value })
        }
        if (name === "country") {
            setWeather({ ...weather, country: value })
        }
        // console.log(weather.city, weather.country)
    };

    return (
        <div>
            <form className="form-button">
                <label> Enter the city name and country :</label>
                <input className="input" type="text" name="city" placeholder="city" onChange={e => handleChange(e)} />
                <input className="input" type="text" name="country" placeholder="country" onChange={e => handleChange(e)} />
                <button className="button" type="button" onClick={(e) => weatherData(e)}>Search</button>
            </form>

            {
                weather.data !== undefined ? (
                    <div>
                        <DisplayWeather data={weather.data} />
                    </div>
                ) : null}
        </div>
    );
}


export default Home;