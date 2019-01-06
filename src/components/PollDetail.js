import React from "react";
import { connect } from "react-redux";

function PollDetail({ hasAnswered, question, authedUser }) {
  // return <div>{hasAnswered ? <ViewPoll /> : <QuestionDetail />}</div>
  return <div> ............................. </div>;
}

function mapStateToProps({ questions, authedUser }, { match }) {
  // question object contains optionOne, optionTwo, author, and id
  const question = questions[match.params.question_id.slice(1)];
  const { optionOne, optionTwo } = question;
  return {
    authedUser,
    hasAnswered:
      optionOne.votes.includes(authedUser.id) ||
      optionTwo.votes.includes(authedUser.id)
  };
}

export default connect(mapStateToProps)(PollDetail);
