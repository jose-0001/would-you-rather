import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Qs from "./Qs";

class ViewPoll extends Component {
  render() {
    const { users, optionOne, optionTwo } = this.props.location.state;
    const { authedUser } = this.props;
    if (authedUser === null) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Qs users={users} optionOne={optionOne} optionTwo={optionTwo} />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(ViewPoll);
