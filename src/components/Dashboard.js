import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>QUESTIONS</h3>
        <ul>
          {this.props.questionIds.map(id => (
            <Questions id={id} key={id} />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
