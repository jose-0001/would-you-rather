import React, { Component } from "react";
import { Image, Segment, Divider, Header, Label } from "semantic-ui-react";
import CardStats from "./CardStats";

class LeaderStats extends Component {
  render() {
    const { avatarURL, name, answeredQs, createdQs } = this.props;
    return (
      <CardStats
        name={name}
        avatarURL={avatarURL}
        answeredQs={answeredQs}
        createdQs={createdQs}
      />
      // <div style={{ margin: "4% 10%" }}>
      //   <Segment.Group horizontal style={{ marginTop: 0 }}>
      //     <Segment attached>
      //       <Image
      //         size="medium"
      //         circular
      //         src={avatarURL}
      //         style={{ margin: "8%", width: "225px" }}
      //       />
      //     </Segment>
      //     <Segment attached>
      //       <Header as="h1">{name}</Header>
      //       <Header as="h3">
      //         Answered Questions
      //         <Label circular color="red" size="large">
      //           {answeredQs}
      //         </Label>
      //       </Header>
      //       <Divider horizontal>-</Divider>
      //       <Header as="h3">
      //         Created Questions
      //         <Label circular color="teal" size="large">
      //           {createdQs}
      //         </Label>
      //       </Header>
      //     </Segment>
      //     <Segment attached>
      //       <Header as="h3" centered>
      //         Score
      //       </Header>
      //       <Label circular color="orange" size="massive">
      //         {answeredQs + createdQs}
      //       </Label>
      //     </Segment>
      //   </Segment.Group>
      // </div>
    );
  }
}

export default LeaderStats;
