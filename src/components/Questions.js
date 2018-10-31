import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Qs from "./Qs";

class Questions extends Component {
  render() {
    const { users, optionOne, optionTwo, authedUser, toggleTab } = this.props;

    const answeredByAuthedUser =
      optionOne.votes.includes(authedUser.id) ||
      optionTwo.votes.includes(authedUser.id)
        ? true
        : false;

    return (
      <Fragment>
        <div>
          {!answeredByAuthedUser && toggleTab === false ? (
            <Qs users={users} optionOne={optionOne} optionTwo={optionTwo} />
          ) : null}
        </div>
        <div>
          {answeredByAuthedUser && toggleTab === true ? (
            <Qs users={users} optionOne={optionOne} optionTwo={optionTwo} />
          ) : null}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    optionOne: question.optionOne,
    optionTwo: question.optionTwo,
    users: users[question.author]
  };
}

export default connect(mapStateToProps)(Questions);
