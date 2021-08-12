import { useState, useEffect } from "react";
// import Button from "../components/Button";

function Home() {

    const [weather, setWeather] = useState({})


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


    // useEffect(() => {
    //     fetch(`api.openweathermap.org/data/2.5/weather?q={city name}&appid=9c269693b4b9a53b83d8c1c2dfa761d2`)
    //         .then((res) => res.json())
    //         .then((res) => setWeather(res));
    // }, []);


    return (
        <div>
            {/* <Button /> */}
            <form className="form-button">
                <label> Enter the city name and country :</label>
                <input className="input" type="text" name="city" placeholder="city" onChange={e => handleChange(e)} />
                <input className="input" type="text" name="country" placeholder="country" onChange={e => handleChange(e)} />
                <button className="button" type="button">Search</button>
            </form>
        </div>
    );
}

export default Home;