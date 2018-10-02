import React, { Component } from "react";
import { connect } from "react-redux";

class NewQuestion extends Component {
  render() {
    return <div>Questions go here...</div>;
  }
}

export default connect()(NewQuestion);