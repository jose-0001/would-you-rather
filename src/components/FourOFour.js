import React from "react";
import { Segment, Statistic } from "semantic-ui-react";

const FourOFour = () => {
  return (
    <div>
      <Segment inverted>
        <Statistic.Group inverted>
          <Statistic
            color="red"
            size="huge"
            inverted
            horizontal
            style={{ margin: "auto" }}
          >
            <Statistic.Value>404</Statistic.Value>
            <Statistic.Label>Oops page doesn't exist</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    </div>
  );
};

export default FourOFour;
