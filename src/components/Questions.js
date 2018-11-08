import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import UnAnsweredQuestion from "./UnAnsweredQuestion";

class Questions extends Component {
  render() {
    const {
      answeredByAuthedUser,
      user,
      answered,
      optionOne,
      optionTwo
    } = this.props;
    console.log(this.props)
    return (
      <div>
        hi
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  const optionOne = question.optionOne;
  const optionTwo = question.optionTwo;
  return {
    authedUser,
    user: users[question.author],
    optionOne,
    optionTwo
  };
}

export default connect(mapStateToProps)(Questions);
