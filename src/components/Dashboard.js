import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";

class Dashboard extends Component {
  render() {
    const { history } = this.props;
    return (
      <div style={{ margin: "3%" }}>
        {this.props.questionIds.map(id => (
          <Questions id={id} key={id} history={history} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
