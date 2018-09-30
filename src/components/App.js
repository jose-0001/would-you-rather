import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import DropDownSelection from './DropDownSelection';
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

// to gain access to dispatch we need to connect
export default connect()(App);
