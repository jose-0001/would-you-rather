import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Segment, Divider, Header, Button } from "semantic-ui-react";

class Questions extends Component {
  render() {
    const { users, question } = this.props;
    return (
      <div style={{ margin: "4% 10%" }}>
        <Header as="h2" attached="top" block>
          {users.name} asks:
        </Header>
        <Segment.Group horizontal style={{ marginTop: 0 }}>
          <Segment attached>
            <Image
              size="medium"
              circular
              src={users.avatarURL}
              style={{ margin: "8%" }}
            />
            <Header as="h2">{users.id}</Header>
          </Segment>
          <Segment attached>
            <Header as="h1">Would you rather...</Header>
            <Header as="h3">{question.optionOne.text}</Header>
            <Divider horizontal>Or</Divider>
            <Header as="h3">{question.optionTwo.text}</Header>
            <Button fluid inverted color="green" style={{ marginTop: "8%" }}>
              View Poll
            </Button>
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    question,
    authedUser,
    users: users[question.author]
  };
}

export default connect(mapStateToProps)(Questions);
