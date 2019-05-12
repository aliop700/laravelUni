import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryList from "./CountryList";
import UniversityList from "./UniversityList";
import Table from "./Table";
import SearchComponent from "./SearchComponent";

class Filters extends Component {
    constructor() {
        super();
        this.state = {
            country_id: -1,
            universities: [],
            majors: [],
            sort: 1
        };
        this.handleSort = this.handleSort.bind(this);
    }
    handleChange() {
        console.log(document.getElementById("#country"));
        var country_id = document.getElementById("#country").value;
        if (country_id != -1)
            axios
                .get(`/api/countries/${country_id}/universities`)
                .then(response => {
                    this.setState({
                        country_id,
                        universities: response.data,
                        university_id: -1
                    });
                });
        else
            this.setState({
                universities: []
            });
    }
    handleChangeUni() {
        console.log(document.getElementById("#university"));
        var university_id = document.getElementById("#university").value;
        var country_id = this.state.country_id;
        if (university_id != -1)
            axios
                .get(
                    `/api/countries/${country_id}/universities/${university_id}/majors`
                )
                .then(response => {
                    this.setState({
                        majors: response.data
                    });
                    console.log(this.state);
                });
        else
            this.setState({
                majors: []
            });
    }
    handleSearch() {
        var search = document.getElementById("searchbox").value;
        axios.get(`/api/majors?search=${search}`).then(response => {
            this.setState({
                majors: response.data
            });
        });
    }
    handleSort(index) {
        console.log(index);
        console.log("LY");
        const sort = this.state.sort;
        var sorter = [
            {
                sort: function(list) {
                    list.sort((a, b) =>
                        a.name > b.name ? sort * 1 : sort * -1
                    );
                }
            },
            {
                sort: function(list) {
                    list.sort((a, b) =>
                        a.hour_cost > b.hour_cost ? sort * 1 : sort * -1
                    );
                }
            },
            {
                sort: function(list) {
                    list.sort((a, b) =>
                        a.minimum_average > b.minimum_average
                            ? sort * 1
                            : sort * -1
                    );
                }
            },
            {
                sort: function(list) {
                    list.sort((a, b) =>
                        a.university.name > b.university.name
                            ? sort * 1
                            : sort * -1
                    );
                }
            }
        ];

        var majors = this.state.majors;
        sorter[index].sort(majors);
        this.setState({
            majors,
            sort: sort * -1
        });
        // console.log(index);
    }
    render() {
        return (
            <div>
                <SearchComponent onClick={e => this.handleSearch()} />
                <CountryList onChange={e => this.handleChange()} />
                <UniversityList
                    value={this.state.universities}
                    onChange={e => this.handleChangeUni()}
                />
                <Table value={this.state.majors} onClick={this.handleSort} />
            </div>
        );
    }
}

export default Filters;
