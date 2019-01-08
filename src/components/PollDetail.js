import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ViewPoll from "./ViewPoll";
import UnAnsweredQuestion from "./UnAnsweredQuestion";

function PollDetail({ hasAnswered, optionOne, optionTwo, user, id }) {
  if (id === false) {
    return <Redirect to="/404" />;
  }
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
  const idChecker = Object.values(questions).some(question => {
    return question.id === id;
  });
  // question object contains optionOne, optionTwo, author, and id
  if (idChecker) {
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
  } else {
    return {
      id: false
    };
  }
}

export default connect(mapStateToProps)(PollDetail);
