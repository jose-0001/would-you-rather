import React from "react";
import { connect } from "react-redux";
import ViewPoll from "./ViewPoll";
import UnAnsweredQuestion from "./UnAnsweredQuestion";

function PollDetail({ hasAnswered, optionOne, optionTwo, user, id }) {
  return (
    <div>
      {hasAnswered ? (
        <ViewPoll optionOne={optionOne} optionTwo={optionTwo} user={user} />
      ) : (
        <UnAnsweredQuestion
          optionOne={optionOne}
          optionTwo={optionTwo}
          user={user}
          id={id}
        />
      )}
    </div>
  );
}

function mapStateToProps({ questions, authedUser, users }, { match }) {
  const id = match.params.question_id.slice(1);
  // question object contains optionOne, optionTwo, author, and id
  const question = questions[id];
  const { optionOne, optionTwo } = question;
  return {
    authedUser,
    optionOne,
    optionTwo,
    user: users[question.author],
    id,
    hasAnswered:
      optionOne.votes.includes(authedUser.id) ||
      optionTwo.votes.includes(authedUser.id)
  };
}

export default connect(mapStateToProps)(PollDetail);
