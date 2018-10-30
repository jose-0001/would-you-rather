import React from "react";
import { Header, Segment, Image, Divider, Button } from "semantic-ui-react";

const Qs = ({ users, optionOne, optionTwo }) => {
  return (
    <div style={{ margin: "4% 10%", clear: "both" }}>
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
          <Header as="h3">{optionOne.text}</Header>
          <Divider horizontal>Or</Divider>
          <Header as="h3">{optionTwo.text}</Header>
          <Button
            fluid
            inverted
            color="green"
            style={{ marginTop: "8%" }}
            onClick={this.handleViewPoll}
          >
            View Poll
          </Button>
        </Segment>
      </Segment.Group>
    </div>
  );
};

export default Qs;
