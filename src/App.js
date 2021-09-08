import React, {Component} from "react";
//import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage";

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    return (
      <HomePage />
    )
  }
}

export default App;

