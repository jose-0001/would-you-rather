import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ViewPoll extends Component {
  render() {
    const { authedUser } = this.props;
    if (authedUser === null) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        viewpoll
      </div>
    );
  }
}

export default connect(({ authedUser }) => {
  return { authedUser };
})(ViewPoll);
