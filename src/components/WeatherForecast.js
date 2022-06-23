import React from "react";
import axios from "axios";
import './WeatherForecast.css';
import DistrictForecast from "./DistrictForeCast";

class WeatherForecast extends React.Component{
    state = {results: []};

    componentDidMount(){
        const {lat, lon} = this.props;

        //fetch axios data
        const weatherResults = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`).then((res)=> {

            this.setState({results: res.data});
        });
    }

    render(){
        return (
            <>
                <DistrictForecast data={this.state.results} />
            </>
        );
    }
}

export default WeatherForecast;
