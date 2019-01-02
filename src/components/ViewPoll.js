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
    <div style={{ margin: "1% 10%"}}>
      <Header as="h2" attached="top" block>
        {user.name} asks:
      </Header>
      <Segment.Group horizontal style={{ marginTop: 0 }}>
        <Segment attached>
          <Image
            size="medium"
            circular
            src={user.avatarURL}
            style={{ width: "100%" }}
          />
          <Header as="h2">{user.id}</Header>
        </Segment>
        <Segment attached>
          <Header as="h2">Would you rather...</Header>
          <Header as="h3">
            {optionOneLength} out of {userCount} users voted for
          </Header>
          <Header as="h2">{optionOne.text}</Header>
          {optionOne.votes.includes(authedUser.id) ? (
            <Fragment>
              <Header as="h1">
                {authedUser.name}{" "}
                <Icon color="green" name="thumbs up outline" />
              </Header>
              <Progress
                percent={percentage(optionOneLength, userCount)}
                inverted
                progress
                success
              />
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
          <Header as="h3">
            {optionTwoLength} out of {userCount} users voted for
          </Header>
          <Header as="h2">{optionTwo.text}</Header>
          {optionTwo.votes.includes(authedUser.id) ? (
            <Fragment>
              <Header as="h2">
                {authedUser.name}{" chose this answer "}
                <Icon color="green" name="thumbs up outline" />
              </Header>
              <Progress
                percent={percentage(optionTwoLength, userCount)}
                inverted
                progress
                success
              />
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
