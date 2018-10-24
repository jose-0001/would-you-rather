import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LeaderStats from "./LeaderStats";

class LeaderBoard extends Component {
  render() {
    const { users, authedUser } = this.props;

    if (authedUser === null) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        {users.map(user => (
          <LeaderStats
            key={user.id}
            avatarURL={user.avatarURL}
            name={user.name}
            answeredQs={Object.keys(user.answers).length}
            createdQs={user.questions.length}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users: Object.values(users)
  };
}

export default connect(mapStateToProps)(LeaderBoard);
