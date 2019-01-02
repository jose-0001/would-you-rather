import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
import "./NewQuestion.css";

class NewQuestion extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;
    if (optionOneText && optionTwoText) {
      dispatch(handleAddQuestion(optionOneText, optionTwoText));
    }
    this.setState({
      optionOneText: "",
      optionTwoText: "",
      toHome: true
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    if (this.state.toHome) {
      return <Redirect to="/home" />;
    }

    return (
        <div className="form">
          <h1>Create New Question</h1>
          <form>
            <h2>Would you rather...</h2>
            <input
              type="text"
              placeholder="Enter option one here."
              name="optionOneText"
              onChange={this.handleInput}
            />
            <h2>OR</h2>
            <input
              type="text"
              placeholder="Enter option two here."
              name="optionTwoText"
              onChange={this.handleInput}
            />
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>
        </div>
    );
  }
}

export default connect()(NewQuestion);
