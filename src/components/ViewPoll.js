import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Header,
  Segment,
  Image,
  Divider,
  Progress,
  Icon
} from "semantic-ui-react";

const ViewPoll = ({ authedUser, location, users }) => {
  if (location.state === undefined) {
    return <Redirect to="/404" />;
  }
  const { optionOne, optionTwo, user } = location.state;
  const optionOneLength = optionOne.votes.length;
  const optionTwoLength = optionTwo.votes.length;

  // keep track of voter count
  const voterCount = optionOneLength + optionTwoLength;

  const percentage = (option, voterCount) => {
    return Math.floor((option / voterCount) * 100);
  };

  return (
    <div style={{ width: "50%", margin: "1% 25%" }}>
      <Header as="h2" attached="top" block>
        Would you rather...
      </Header>
      <Segment.Group horizontal style={{ marginTop: 0 }}>
        <Segment attached>
          <Image
            size="medium"
            circular
            src={user.avatarURL}
            style={{ width: "100%" }}
          />
          <Header as="h2">{user.name}</Header>
        </Segment>
        <Segment attached>
          <Header
            as="h2"
            style={{ border: "1px solid black", textAlign: "center" }}
          >
            {optionOne.text}
          </Header>
          <Header as="h3" style={{ textAlign: "center" }}>
            {optionOneLength} out of {voterCount} users voted for
          </Header>
          {optionOne.votes.includes(authedUser.id) ? (
            <Fragment>
              <Progress
                percent={percentage(optionOneLength, voterCount)}
                inverted
                progress
                success
              />
              <Header
                as="h4"
                style={{
                  width: "75%",
                  float: "left",
                  textAlign: "center",
                  margin: "0"
                }}
              >{`${authedUser.name} chose this answer `}</Header>
              <Icon color="green" name="thumbs up outline" />
            </Fragment>
          ) : (
            <Progress
              percent={percentage(optionOneLength, voterCount)}
              inverted
              progress
              error
            />
          )}
          <Divider horizontal>Or</Divider>
          <Header
            as="h2"
            style={{ border: "1px solid black", textAlign: "center" }}
          >
            {optionTwo.text}
          </Header>
          <Header as="h3" style={{ textAlign: "center" }}>
            {optionTwoLength} out of {voterCount} users voted for
          </Header>
          {optionTwo.votes.includes(authedUser.id) ? (
            <Fragment>
              <Progress
                percent={percentage(optionTwoLength, voterCount)}
                inverted
                progress
                success
              />
              <Header
                as="h4"
                style={{
                  width: "75%",
                  float: "left",
                  textAlign: "center",
                  margin: "0"
                }}
              >{`${authedUser.name} chose this answer `}</Header>
              <Icon color="green" name="thumbs up outline" />
            </Fragment>
          ) : (
            <Progress
              percent={percentage(optionTwoLength, voterCount)}
              inverted
              progress
              error
            />
          )}
        </Segment>
      </Segment.Group>
    </div>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(ViewPoll);
