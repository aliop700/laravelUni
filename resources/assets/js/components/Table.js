import axios from "axios";
import React, { Component } from "react";

class Table extends Component {
    constructor() {
        super();
    }

    render() {
        var majors = this.props.value;

        return (
            <table className="table table-dark">
                <tr>
                    <th onClick={() => this.props.onClick(1)}>Name</th>
                    <th>Hour Cost</th>
                    <th>Minimum Average</th>
                    <th>University</th>
                </tr>
                {majors.map(major => (
                    <tr>
                        <td>{major.name}</td>
                        <td>{major.hour_cost}</td>
                        <td>{major.minimum_average}</td>
                        <td>{major.university.name}</td>
                    </tr>
                ))}
            </table>
        );
    }
}

export default Table;
