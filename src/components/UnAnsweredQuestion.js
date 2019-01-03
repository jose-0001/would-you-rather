import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Header, Segment, Image, Divider, Button } from "semantic-ui-react";
import { handleAddVote } from "../actions/questions";

class UnAnsweredQuestion extends Component {
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
    const { dispatch, history, location } = this.props;
    const { user, optionOne, optionTwo, id } = location.state;
    const questionLocation = {
      pathname: `/questions/:${id}`,
      state: {
        user,
        optionOne,
        optionTwo,
      }
    };
   
    if (answer) {
      // dispatch(handleAddVote({ qid, answer }));
      // history.push(questionLocation);
      dispatch(handleAddVote({qid, answer}))
      .then(() => history.push(questionLocation))
    } else {
      alert("Select an option to submit answer.")
    }
  };

  render() {
    const { user, optionOne, optionTwo, id } = this.props.location.state;

    return (
      <div style={{margin: "1% 10%"}}>
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
            <Header as="h3">{optionOne.text}</Header>
            <input
              type="radio"
              name="option"
              value="optionOne"
              onClick={e => {
                this.handleSelection(e, id);
              }}
            />
            <Divider horizontal>Or</Divider>
            <Header as="h3">{optionTwo.text}</Header>
            <input
              type="radio"
              name="option"
              value="optionTwo"
              onClick={e => {
                this.handleSelection(e, id);
              }}
            />
            <Button
              fluid
              inverted
              color="green"
              style={{ marginTop: "8%" }}
              onClick={this.handleSubmit}
            >
              Submit answer
            </Button>
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users}) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(withRouter(UnAnsweredQuestion));
