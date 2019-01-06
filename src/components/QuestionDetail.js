import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Header, Segment, Image, Divider, Button } from "semantic-ui-react";

class QuestionDetail extends Component {
  handleSubmit = e => {
    const { history, user, optionOne, optionTwo, id } = this.props;
    // using location object to pass in pathname and state to UnAnsweredQuestions Component
    const location = {
      pathname: `/questions/:${id}`,
    };
    e.preventDefault();
    // using history to redirect to another uri
    history.push(location);
  };

  render() {
    const { user, optionOne, optionTwo } = this.props;

    return (
      <div
        style={{
          textAlign: "center",
          width: "90%"
        }}
      >
        <Header as="h2" attached="top" block>
          {user.name} asks:
        </Header>
        <Segment.Group horizontal style={{ marginTop: 0 }}>
          <Segment attached>
            <Image
              size="medium"
              circular
              src={user.avatarURL}
              style={{ width: "100%" }}
            />
            <Header as="h2">{user.id}</Header>
          </Segment>
          <Segment
            attached
            style={{
              display: "flex",
              flexFlow: "column wrap",
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <Header as="h1">Would you rather...</Header>
            <Header as="h3">{optionOne.text}</Header>
            <Divider horizontal>Or</Divider>
            <Header as="h3">{optionTwo.text}</Header>
            <Button
              fluid
              inverted
              color="green"
              style={{ marginTop: "8%" }}
              onClick={this.handleSubmit}
            >
              View Poll
            </Button>
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  const optionOne = question.optionOne;
  const optionTwo = question.optionTwo;

  return {
    authedUser,
    user: users[question.author],
    optionOne,
    optionTwo,
    id
  };
}

export default connect(mapStateToProps)(withRouter(QuestionDetail));
