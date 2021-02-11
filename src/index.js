import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";
import {Provider} from "react-redux";
import RouteByRoot from "./views/RouteValueStations";

import store from './store'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Provider store={store}>
                <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
                <Route path="/route" render={(props) => <RouteByRoot {...props} />}/>
                <Redirect from="/" to="/admin/dashboard"/>
            </Provider>,
        </Switch>
    </BrowserRouter>,
    document.getElementById("root"),
);