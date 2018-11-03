import React, { Component} from "react";
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

    if (!answeredByAuthedUser && toggleTab === false) {
      return <Qs users={users} optionOne={optionOne} optionTwo={optionTwo} />;
    } else if (answeredByAuthedUser && toggleTab === true) {
      return <Qs users={users} optionOne={optionOne} optionTwo={optionTwo} />;
    } else {
      return null;
    }
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
