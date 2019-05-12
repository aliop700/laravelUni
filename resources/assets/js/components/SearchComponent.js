import React, { Component } from "react";

class SearchComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    Style="margin: 0 auto"
                    className="form-control"
                    id="searchbox"
                />
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => this.props.onClick()}
                >
                    Search
                </button>
            </div>
        );
    }
}

export default SearchComponent;
