import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Segment, Grid, Divider, Header } from "semantic-ui-react";

class Questions extends Component {
  render() {
    console.log(this.props);
    const { users, question } = this.props;
    return (
        <Segment className="question" style={{ marginRight: 40 }}>
          <Image size="small" circular src={users.avatarURL} />
          <Header as="h1">Would you rather...</Header>
          <Header as="h3" />
        </Segment>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    question: question,
    users: users[question.author]
  };
}

export default connect(mapStateToProps)(Questions);
