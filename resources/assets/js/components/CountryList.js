import axios from "axios";
import React, { Component } from "react";

class CountryList extends Component {
    constructor() {
        super();
        this.state = {
            countries: []
        };
    }

    componentDidMount() {
        axios.get("/api/countries").then(response => {
            this.setState({
                countries: response.data
            });
        });
    }

    render() {
        const { countries } = this.state;
        return (
            <select
                id="#country"
                className="form-control mb-2"
                onChange={e => this.props.onChange(e.target.value)}
            >
                <option value="-1">Please choose country</option>
                {countries.map(country => (
                    <option value={country.id}>{country.name}</option>
                ))}
            </select>
        );
    }
}

export default CountryList;
