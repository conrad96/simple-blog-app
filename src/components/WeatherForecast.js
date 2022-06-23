import React from "react";
import axios from "axios";

class WeatherForecast extends React.Component{
    state = {results: []};

    componentDidMount(){
        const {lat, lon} = this.props;

        //fetch axios data
        const weatherResults = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`).then((res)=> {

            this.setState({results: res.data});
        });
    }

    displayResults = () => {
        if(this.state.results.length != 0 ){
            // console.log(this.state.results);
            const {coord, weather, wind, main} = this.state.results;

            return (`
            <div className="col-md-3">
                <div className="card" style="width: 18rem;">
                    <img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" className="card-img-top" alt="${weather[0].main}">
                    <div className="card-body">
                        <h5 class="card-title">${this.props.name}</h5>
                        <p class="card-text">
                            <ul>
                                <li>Weather description: ${weather[0].description}</li>
                                <li>Temperature: ${main.temp} (celsius)</li>
                                <li>Coordinates:  ${coord.lat}, ${coord.lon}</li>
                                <li>Wind: ${wind.speed}</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>`);
        }
    }

    render(){

        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: this.displayResults()}} />
            </div>
        );
    }
}

export default WeatherForecast;
