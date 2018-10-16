import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderStats from "./LeaderStats";

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

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

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

export default connect(mapStateToProps)(LeaderBoard);
