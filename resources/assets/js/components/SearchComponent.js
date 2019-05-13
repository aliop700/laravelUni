import React, { Component } from "react";

class SearchComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    id="searchbox"
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => this.props.onClick()}
                        type="button"
                    >
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchComponent;
