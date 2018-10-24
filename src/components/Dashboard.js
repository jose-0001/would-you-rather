import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Questions from "./Questions";

class Dashboard extends Component {
  render() {
    const { authedUser } = this.props;
    if (authedUser === null) {
      return <Redirect to="/" />;
    }

    return (
      <div style={{ margin: "3%" }}>
        {this.props.questionIds.map(id => (
          <Questions id={id} key={id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    authedUser,
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
