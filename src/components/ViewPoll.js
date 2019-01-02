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

  const userCount = Object.values(users).length;

  const percentage = (option, userCount) => {
    return Math.floor((option / userCount) * 100);
  };

  return (
    <div style={{ margin: "1% 10%" }}>
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
            {optionOneLength} out of {userCount} users voted for
          </Header>
          {optionOne.votes.includes(authedUser.id) ? (
            <Fragment>
              <Header as="h2">
                <Progress
                  percent={percentage(optionOneLength, userCount)}
                  inverted
                  progress
                  success
                />
                <Icon color="green" name="thumbs up outline" />
                <br />
                {`${authedUser.name} chose this answer `}
              </Header>
            </Fragment>
          ) : (
            <Progress
              percent={percentage(optionOneLength, userCount)}
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
            {optionTwoLength} out of {userCount} users voted for
          </Header>
          {optionTwo.votes.includes(authedUser.id) ? (
            <Fragment>
              <Header as="h2">
                <Progress
                  percent={percentage(optionTwoLength, userCount)}
                  inverted
                  progress
                  success
                />
                <Icon color="green" name="thumbs up outline" />
                <br />
                {`${authedUser.name} chose this answer `}
              </Header>
            </Fragment>
          ) : (
            <Progress
              percent={percentage(optionTwoLength, userCount)}
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
