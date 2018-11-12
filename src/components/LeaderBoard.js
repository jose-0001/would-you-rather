import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import CardStats from "./CardStats";

class LeaderBoard extends Component {
  render() {
    const { users, authedUser } = this.props;

    if (authedUser === null) {
      return <Redirect to="/" />;
    }

    console.log(users);
    return (
      <div>
        {users.map(user => (
          <CardStats
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
    users: Object.values(users).sort((a, b) => (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length))
  };
}

export default connect(mapStateToProps)(LeaderBoard);
