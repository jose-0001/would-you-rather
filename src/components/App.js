import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import DropDownSelection from './DropDownSelection';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <DropDownSelection />
      </div>
    );
  }
}

// to gain access to dispatch we need to connect
export default connect()(App);
