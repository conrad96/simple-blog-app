import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherForecast from "./components/WeatherForecast";

class  App extends React.Component {

    fetchDistrictWeatherForecast = () => {
        const districts = [
            { id: 1, name: "kabale", lat: "-1.248230", long: "29.984690" },
            { id: 2, name: "kisoro", lat: "-1.218060", long: "29.682050" },
            { id: 3, name: "katuna", lat: "-1.416880", long: "30.007690" }
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
                <div className="row">
                    {/* <WeatherForecast /> */}
                    {this.fetchDistrictWeatherForecast()}
                </div>
            </div>
        </>
    )}
}

export default App;
