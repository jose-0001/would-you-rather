import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Header, Segment, Image, Divider, Button } from "semantic-ui-react";
import { handleAddVote } from "../actions/questions";

class AnsweredQuestion extends Component {
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
    dispatch(handleAddVote({ qid, answer }));
    history.push("/home");
  };

  render() {
    const { user, optionOne, optionTwo, history } = this.props;
    const location = {
      pathname: `/questions/${user.questions[0]}`,
      state: {
        user,
        optionOne,
        optionTwo
      }
    };
    return (
      <div style={{ margin: "4% 10%", clear: "both" }}>
        <Header as="h2" attached="top" block>
          {user.name} asks:
        </Header>
        <Segment.Group horizontal style={{ marginTop: 0 }}>
          <Segment attached>
            <Image
              size="medium"
              circular
              src={user.avatarURL}
              style={{ margin: "8%" }}
            />
            <Header as="h2">{user.id}</Header>
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
              onClick={() => history.push(location)}
            >
              View Poll
            </Button>
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  const optionOne = question.optionOne;
  const optionTwo = question.optionTwo;
  return {
    authedUser,
    user: users[question.author],
    optionOne,
    optionTwo
  };
}

export default connect(mapStateToProps)(withRouter(AnsweredQuestion));
