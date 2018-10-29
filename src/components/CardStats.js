import React from "react";
import { Card, Image, Label } from "semantic-ui-react";

const CardStats = ({ name, avatarURL, answeredQs, createdQs }) => (
  <Card style={{ textAlign: "right", margin: "2% 3%", float: "left" }}>
    <Image src={avatarURL} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        <h1>
          Answered Questions
          <Label circular color="blue" size="large">
            {answeredQs}
          </Label>
        </h1>
      </Card.Description>
      <Card.Description>
        <h1>
          Created Questions
          <Label circular color="orange" size="large">
            {createdQs}
          </Label>
        </h1>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <h1>
        Score{" "}
        <Label circular color="green">
          {answeredQs + createdQs}
        </Label>
      </h1>
    </Card.Content>
  </Card>
);

export default CardStats;
