import axios from "axios";
import React, { Component } from "react";

class UniversityList extends Component {
    constructor() {
        super();
        this.state = {
            universities: []
        };
    }

    render() {
        const universities = this.props.value;
        return (
            <select id="#university" onChange={() => this.props.onChange()}>
                <option value="-1">Please Select University</option>
                {universities.map(university => (
                    <option value={university.id}>{university.name}</option>
                ))}
            </select>
        );
    }
}

export default UniversityList;
