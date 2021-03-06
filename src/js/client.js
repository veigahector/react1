import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Layout from "./components/layout/Default"

const app = document.getElementById('app')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
        </Route>
    </Router>,

app)