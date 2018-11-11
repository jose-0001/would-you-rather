import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AnsweredQuestion from "./AnsweredQuestion";
import UnAnsweredQuestion from "./UnAnsweredQuestion";

class Home extends Component {
  state = {
    answered: false
  };

  handleToggleTab = () => {
    this.setState(prevState => ({
      answered: !prevState.answered
    }));
  };

  render() {
    const { authedUser, unAnsweredQIds, answeredQIds } = this.props;
    const { answered } = this.state;
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
          {answered === false ? (
            <Fragment>
              <div className="answersTab" onClick={this.handleToggleTab}>
                UnAnswered Questions
              </div>
              {unAnsweredQIds.map(id => (
                <UnAnsweredQuestion id={id} key={id} />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              <div className="answersTab" onClick={this.handleToggleTab}>
                Answered Questions
              </div>
              {answeredQIds.map(id => (
                <AnsweredQuestion id={id} key={id} />
              ))}
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  const questionIds = Object.keys(questions)

  const answeredQIds = Object.values(questions)
    .map((question, i) => {
      if (
        question.optionTwo.votes.includes(authedUser.id) ||
        question.optionOne.votes.includes(authedUser.id)
      ) {
        return questionIds[i];
      } else {
        return "";
      }
    })
    .filter(id => {
      return id.length > 0;
    }).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );;

  const unAnsweredQIds = Object.values(questions)
    .map((question, i) => {
      if (
        !question.optionTwo.votes.includes(authedUser.id) &&
        !question.optionOne.votes.includes(authedUser.id)
      ) {
        return questionIds[i];
      } else {
        return "";
      }
    })
    .filter(id => {
      return id.length > 0;
    }).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );;

  return {
    authedUser,
    answeredQIds,
    unAnsweredQIds
  };
}

export default connect(mapStateToProps)(Home);
