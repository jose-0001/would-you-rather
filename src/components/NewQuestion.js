import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;
    if (optionOneText && optionTwoText) {
      dispatch(handleAddQuestion({ optionOneText, optionTwoText }));
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

    const { authedUser} = this.props;
    if (authedUser === null) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <style>
          {`
         .form {
           font: 95% Arial, Helvetica, sans-serif;
           max-width: 50%;
           margin: 4% auto;
           padding: 16px;
           background: #F7F7F7;
         }

         .form h1 {
           background: #4CA0AF;
           padding: 20px 0;
           font-size: 140%;
           font-weight: 300;
           text-align: center;
           color: #fff;
           margin: -16px -16px 16px -16px;
         }

         .form input[type="text"] {
            -webkit-transition: all 0.30s ease-in-out;
            -moz-transition: all 0.30s ease-in-out;
            -ms-transition: all 0.30s ease-in-out;
            -o-transition: all 0.30s ease-in-out;
            outline: none;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            width: 100%;
            background: #fff;
            margin-bottom: 4%;
            border: 1px solid #ccc;
            padding: 3%;
            color: #555;
            font: 95% Arial, Helvetica, sans-serif;
         }

         .form input[type="submit"] {
            box-sizing: border-box;
	          -webkit-box-sizing: border-box;
	          -moz-box-sizing: border-box;
	          width: 100%;
	          padding: 3%;
	          background: #4CA0AF;
	          border-bottom: 2px solid #30C29E;
	          border-top-style: none;
	          border-right-style: none;
	          border-left-style: none;	
	          color: #fff;
         }

         .form input[type="submit"]:hover {
            background: #2EBC99;
         }

         .form h2 {
           text-align: center;
           padding: 16px;
           font-family: Arial;
         }
      `}
        </style>
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
            <input
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(({ authedUser }) => {
  return { authedUser };
})(NewQuestion);
