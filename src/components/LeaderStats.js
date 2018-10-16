import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Segment, Divider, Header, Button } from "semantic-ui-react";

class LeaderStats extends Component {
  render() {
    const { avatarURL, name, answeredQs, createdQs } = this.props;
    return (
      <div style={{ margin: "4% 10%" }}>
        <Segment.Group horizontal style={{ marginTop: 0 }}>
          <Segment attached>
            <Image
              size="medium"
              circular
              src={avatarURL}
              style={{ margin: "8%" }}
            />
          </Segment>
          <Segment attached>
            <Header as="h1">{name}</Header>
            <Header as="h3">Answered Questions #{answeredQs}</Header>
            <Divider horizontal>-</Divider>
            <Header as="h3">Created Questions #{createdQs}</Header>
          </Segment>
          <Segment attached>
            <Header as="h3">Score</Header>
            <div>{answeredQs + createdQs}</div>
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default LeaderStats;
