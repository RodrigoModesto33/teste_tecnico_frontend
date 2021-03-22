/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import Grafics from './Components/Grafics.jsx'
import logo from "./assets/imgs/logoW.png"



import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor: '#ef5145' }}>
            <Link to={"/"} className="navbar-brand">
              <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: "100px" }} src={logo} />
            </Link>

            <div className="collapse navbar-collapse">

              <Link to={"/grafics"} className="navbar-brand">
                <b>Situação no Brasil</b>
                  </Link>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/grafics" component={Grafics} />
          </Switch>
        </div>
      </Router>
    );
  }
}
