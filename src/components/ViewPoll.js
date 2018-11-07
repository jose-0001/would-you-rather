import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Question from "./Question";

class ViewPoll extends Component {
  render() {
    const { authedUser } = this.props;
    if (authedUser === null) {
      return <Redirect to="/" />;
    }

    const { user, optionOne, optionTwo } = this.props.location.state;
    return (
      <div>
        <Question user={user} optionOne={optionOne} optionTwo={optionTwo} />
      </div>
    );
  }
}

export default connect(({ authedUser }) => {
  return { authedUser };
})(ViewPoll);
