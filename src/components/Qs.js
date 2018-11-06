import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Header, Segment, Image, Divider, Button } from "semantic-ui-react";
import { handleAddVote } from "../actions/questions";

class Qs extends Component {
  state = {
    answer: ""
  };

  handleSelection = (e, qid) => {
    this.setState({
      answer: e.target.value,
      qid
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { qid, answer } = this.state;
    const { dispatch, history } = this.props;
    console.log(this.state);
    dispatch(handleAddVote({ qid, answer }));
    history.push("/home");
  };

  render() {
    const { users, optionOne, optionTwo, history } = this.props;
    const location = {
      pathname: "/viewpoll",
      state: {
        users,
        optionOne,
        optionTwo
      }
    };
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
            {history.location.pathname === "/viewpoll" && (
              <input
                type="radio"
                name="option"
                value="optionOne"
                onClick={e => {
                  this.handleSelection(e, users.questions[0]);
                }}
              />
            )}
            <Divider horizontal>Or</Divider>
            <Header as="h3">{optionTwo.text}</Header>
            {history.location.pathname === "/viewpoll" && (
              <input
                type="radio"
                name="option"
                value="optionTwo"
                onClick={e => {
                  this.handleSelection(e, users.questions[1]);
                }}
              />
            )}
            {history.location.pathname === "/viewpoll" ? (
              <Button
                fluid
                inverted
                color="green"
                style={{ marginTop: "8%" }}
                onClick={this.handleSubmit}
              >
                Submit answer
              </Button>
            ) : (
              <Button
                fluid
                inverted
                color="green"
                style={{ marginTop: "8%" }}
                onClick={() => history.push(location)}
              >
                View Poll
              </Button>
            )}
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default connect(({ authedUser }) => {
  return { authedUser };
})(withRouter(Qs));
