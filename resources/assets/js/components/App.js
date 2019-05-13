import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Filters from "./Filters";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Filters} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
