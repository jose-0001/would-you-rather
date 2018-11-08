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

    return (
      <div>
        {answered === false && answeredByAuthedUser === null ? (
          <Question optionOne={optionOne} optionTwo={optionTwo} user={user} />
        ) : null}
        {answered && answeredByAuthedUser !== null ? (
          <UnAnsweredQuestion
            optionOne={answeredByAuthedUser.optionOne}
            optionTwo={answeredByAuthedUser.optionTwo}
            user={user}
          />
        ) : null}
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
    answeredByAuthedUser:
      optionOne.votes.includes(authedUser.id) ||
      optionTwo.votes.includes(authedUser.id)
        ? question
        : null,
    user: users[question.author],
    optionOne,
    optionTwo
  };
}

export default connect(mapStateToProps)(Questions);
