import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import DropDownSelection from "./DropDownSelection";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return <div>{this.props.loading === true ? null : <Dashboard />}</div>;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

// to gain access to dispatch we need to connect
export default connect(mapStateToProps)(App);
