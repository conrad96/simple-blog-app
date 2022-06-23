import React from "react";

class DistrictForecast extends React.Component{

    render(){

        const {name, weather, main, coord, wind} = this.props.data;
        
        let weatherData = {};
        let temp, lat, lon, speed = null;

        if(Array.isArray(weather)){
            weatherData = weather[0];
        }

        if(typeof main == 'object'){
            temp = main.temp;
        }

        if(typeof coord == 'object'){
            lat = coord.lat;
            lon = coord.lon;
        }

        if(typeof wind == 'object'){
            speed = wind.speed;
        }
        //console.log(weatherData);
        const {icon, description} = weatherData;

        return (
        <div className="col district-card">
            <div className="card" style={{width: "18rem"}}>
                <img src={icon !== null || icon !== undefined? `http://openweathermap.org/img/wn/${icon}.png` : ''} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        Weather description: {description} <br />
                        Temperature: {temp} (ºc) <br />
                        Coordinates:  {lat}, {lon} <br />
                        Wind: {speed}
                    </p>
                </div>
            </div>
        </div>
        );
    }
}

export default DistrictForecast;