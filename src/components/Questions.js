import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";

class Questions extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="question">
        <h1>Questions</h1>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    questions: formatQuestion(question, users[question.author], authedUser)
  };
}

export default connect(mapStateToProps)(Questions);
