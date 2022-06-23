import React from "react";
import './Search.css';

class Search extends React.Component{
    state = {
        selected: []
    }

    onFormSubmit = evt => {
        evt.preventDefault();

        const data = new FormData(evt.target);

        for (let [key, value] of data.entries()) { 
            console.log(key, value);
        }
    }

    render(){
        const districts = [
            {id: 1, name: 'kabale', lat: '-1.248230', long: '29.984690'},
            {id: 2, name: 'kisoro', lat: '-1.218060', long: '29.682050'},
            {id: 3, name: 'katuna', lat: '-1.416880', long: '30.007690'},
        ];

        return (
            <form className="form" id="weather-form" onSubmit={this.onFormSubmit}>
                <div className="row">
                    <div className="col-md-4">
                        <label className="districts-label">Select district</label>
                        <p />
                        <ul className="list-districts">
                        {
                            
                            districts.map(district => {
                                return (
                                    <li key={district.id}>
                                        <label htmlFor={`chk-${district.id}`}>{district.name}</label>
                                        <input id={`chk-${district.id}`} type="checkbox" name={`${district.id}`} className="chk-district" />
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <button id="search" className="btn btn-success">Retrieve Weather Data</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;
