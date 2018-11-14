import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
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
    const { unAnsweredQIds, answeredQIds } = this.props;
    const { answered } = this.state;
 
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
  const answeredQIds = Object.values(questions)
    .filter(({ optionOne, optionTwo }) => {
      return optionOne.votes.includes(authedUser.id) ||
             optionTwo.votes.includes(authedUser.id);
    })
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(question => question.id);

  const unAnsweredQIds = Object.values(questions)
    .filter(({ optionOne, optionTwo }) => {
      return !optionOne.votes.includes(authedUser.id) &&
             !optionTwo.votes.includes(authedUser.id);
    })
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(question => question.id);

  return {
    answeredQIds,
    unAnsweredQIds
  };
}

export default connect(mapStateToProps)(Home);
