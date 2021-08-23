import React from 'react'
// import '../src/App.css'


function DisplayWeather(props) {
    const { data } = props;

    const iconUrl = 'http://openweathermap.org/img/wn/' + `${data.weather[0].icon}` + '.png'

    // const iconUrl = '../icons/animated'
    console.log(data);
    return (
        <div>
            <div>
                <span className="globalName">{data.name}, {data.sys.country}
                </span>
                <span className="Date">
                    {new Date().toLocaleTimeString()}
                    {/* m'etre une heure globale */}
                </span>
                <h1 className="temp">
                    {Math.floor(data.main.temp - 273.15)}
                    <sup>°</sup>
                </h1>
                <span className="weather-main">
                    {data.weather[0].main}
                </span>
                <img src={iconUrl} className="weather-icon" alt="icons-weather" />
                <span>
                    {data.weather[0].description}
                </span>
            </div>
            <div className="weatherDetails">
                <div className="section1">
                    <table>
                        <tr>
                            <td>
                                <h4>High/Low</h4>
                            </td>
                            <td>
                                <span>
                                    {Math.floor(data.main.temp_min - 273.15)} / {""} {Math.floor(data.main.temp_max - 273.15)} <sup>°</sup>C
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather;
