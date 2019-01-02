import React from "react";
import { connect } from "react-redux";
import CardStats from "./CardStats";

const LeaderBoard = ({ users }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center"
      }}
    >
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
};

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users).sort(
      (a, b) =>
        b.questions.length +
        Object.keys(b.answers).length -
        (a.questions.length + Object.keys(a.answers).length)
    )
  };
}

export default connect(mapStateToProps)(LeaderBoard);
