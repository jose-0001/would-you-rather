import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>YOUR QUESTIONS</h3>
        <ul>
          {this.props.questionIds.map(id => (
            <li key={id}>
              <Questions id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser, questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
