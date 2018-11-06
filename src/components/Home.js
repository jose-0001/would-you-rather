import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Questions from "./Questions";

class Home extends Component {
  state = {
    toggleTab: false,
    active: false
  };

  handleToggleTab = () => {
    this.setState(prevState => ({
      active: !prevState.active,
      toggleTab: !prevState.toggleTab
    }));
  };

  render() {
    const { authedUser } = this.props;
    const { toggleTab, active } = this.state;
    if (authedUser === null) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <style>
          {`
            .answersTab {
              margin: 2%;
              padding: 2%;
              background: #333;
              color: white;
              text-align: center;
            }

            .answersTab:hover {
              background: #4CA0AF;
            }
          `}
        </style>
        <div style={{ margin: "3%" }}>
          {active === false ? (
            <div className="answersTab" onClick={this.handleToggleTab}>
              UnAnswered Questions
            </div>
          ) : (
            <div className="answersTab" onClick={this.handleToggleTab}>
              Answered Questions
            </div>
          )}

          {this.props.questionIds.map(id => (
            <Questions id={id} key={id} toggleTab={toggleTab} />
          ))}
        </div>
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

export default connect(mapStateToProps)(Home);
