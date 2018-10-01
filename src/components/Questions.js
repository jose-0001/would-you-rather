import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Image,
  Segment,
  Divider,
  Header,
  Button
} from "semantic-ui-react";

class Questions extends Component {
  render() {
    const { users, question } = this.props;
    return (
      <div style={{ margin: "2% 4% 2% 0%" }}>
        <Header as="h2" attached="top">
          {users.name} asks:
        </Header>
        <Segment.Group horizontal style={{marginTop: 0}}>
          <Segment attached >
            <Image size="small" circular src={users.avatarURL} />
            <Header as="h1">Would you rather...</Header>
          </Segment>
          <Segment attached>
            <Header as="h3">{question.optionOne.text}</Header>
            <Divider horizontal>Or</Divider>
            <Header as="h3">{question.optionTwo.text}</Header>
            <Button inverted color="green">View Poll</Button>
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    question: question,
    users: users[question.author],
    authedUser
  };
}

export default connect(mapStateToProps)(Questions);
