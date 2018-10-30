import React, { Component } from "react";
import { connect } from "react-redux";
import Polls from "./Polls";

class Questions extends Component {
  render() {
    const { question, users } = this.props;
    console.log(users[question.author].answers);
    // console.log(question.author);
    return <div>{}</div>;
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const answeredByAuthedUser = authedUser.answers;
  return {
    question,
    authedUser,
    users,
    answeredByAuthedUser
  };
}

export default connect(mapStateToProps)(Questions);
