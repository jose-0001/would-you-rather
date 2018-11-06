import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Qs from "./Qs";

class ViewPoll extends Component {
  render() {
    const { authedUser } = this.props;
    if (authedUser === null) {
      return <Redirect to="/" />;
    }

    const { users, optionOne, optionTwo } = this.props.location.state;
    return (
      <div>
        <Qs users={users} optionOne={optionOne} optionTwo={optionTwo} />
      </div>
    );
  }
}

export default connect(({ authedUser }) => {
  return { authedUser };
})(ViewPoll);
