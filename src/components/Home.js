import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion";
import "./Home.css";
import QuestionDetail from "./QuestionDetail";

class Home extends Component {
  state = {
    answered: false
  };

  handleAnsweredTab = event => {
    if (event.key === "Enter" || event.button === 0) {
      this.setState({ answered: true });
    }
  };

  handleUnAnsweredTab = event => {
    if (event.key === "Enter" || event.button === 0) {
      this.setState({ answered: false });
    }
  };

  render() {
    const { unAnsweredQIds, answeredQIds } = this.props;
    const { answered } = this.state;

    return (
      <Fragment>
        <div className="answerNav">
          <div
            style={{
              background: answered === false ? "#4ca0af" : "#333"
            }}
            className="answersTab"
            onClick={this.handleUnAnsweredTab}
            onKeyPress={this.handleUnAnsweredTab}
            tabIndex="0"
          >
            UnAnswered Questions
          </div>
          <div
            style={{
              background: answered === true ? "#4ca0af" : "#333"
            }}
            className="answersTab"
            onClick={this.handleAnsweredTab}
            onKeyPress={this.handleAnsweredTab}
            tabIndex="0"
          >
            Answered Questions
          </div>
        </div>
        <main className="main">
          {answered === false ? (
            <Fragment>
              {unAnsweredQIds.map(id => (
                <QuestionDetail id={id} key={id} />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              {answeredQIds.map(id => (
                <AnsweredQuestion id={id} key={id} />
              ))}
            </Fragment>
          )}
        </main>
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  const answeredQIds = Object.values(questions)
    .filter(({ optionOne, optionTwo }) => {
      return (
        optionOne.votes.includes(authedUser.id) ||
        optionTwo.votes.includes(authedUser.id)
      );
    })
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(question => question.id);

  const unAnsweredQIds = Object.values(questions)
    .filter(({ optionOne, optionTwo }) => {
      return (
        !optionOne.votes.includes(authedUser.id) &&
        !optionTwo.votes.includes(authedUser.id)
      );
    })
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(question => question.id);

  return {
    answeredQIds,
    unAnsweredQIds
  };
}

export default connect(mapStateToProps)(Home);
