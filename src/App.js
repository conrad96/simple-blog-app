import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherForecast from "./components/WeatherForecast";

class  App extends React.Component {

    fetchDistrictWeatherForecast = () => {
        const districts = [
            { id: 1, name: "kabale", lat: "-1.248230", long: "29.984690" },
            { id: 2, name: "kisoro", lat: "-1.218060", long: "29.682050" },
            { id: 3, name: "katuna", lat: "-1.416880", long: "30.007690" },
            { id: 4, name: "kampala", lat: "0.347596", long: "32.582520"},
            { id: 5, name: "jinja", lat: "0.441590", long: "33.213200"},
            { id: 6, name: "mbarara", lat: "-0.608930", long: "30.660431"},
            { id: 7, name: "rukungiri", lat: "-0.790590", long: "29.926439"},
            { id: 8, name: "lyantonde", lat: "-0.365470", long: "31.155520"},
            { id: 9, name: "kasese", lat: "0.1309553", long: "30.0046209"},
            { id: 10, name: "fortportal", lat: "0.6508416", long: "30.272629"}
          ]
        
        return districts.map(district => {
            return <WeatherForecast key={district.id} name={district.name} lat={district.lat} lon={district.long} />
        })
    }

    render(){
        return (
        <>
            <div className="container">
                <Header />
                <div className="row align-items-start">
                    {this.fetchDistrictWeatherForecast()}
                </div>
            </div>
        </>
    )}
}

export default App;
