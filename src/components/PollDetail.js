import React from "react";
import { connect } from "react-redux";
import ViewPoll from "./ViewPoll";

function PollDetail({ hasAnswered, optionOne, optionTwo, user }) {
  // return <div>{hasAnswered ? <ViewPoll /> : <QuestionDetail />}</div>
  return <ViewPoll optionOne={optionOne} optionTwo={optionTwo} user={user}/>;
}

function mapStateToProps({ questions, authedUser, users }, { match }) {
  // question object contains optionOne, optionTwo, author, and id
  const question = questions[match.params.question_id.slice(1)];
  const { optionOne, optionTwo } = question;
  return {
    authedUser,
    optionOne,
    optionTwo,
    user: users[question.author],
    hasAnswered:
      optionOne.votes.includes(authedUser.id) ||
      optionTwo.votes.includes(authedUser.id)
  };
}

export default connect(mapStateToProps)(PollDetail);
