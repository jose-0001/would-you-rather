import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Dropdown,
  Button,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";
import { setAuthedUser } from "../actions/authedUser";

class DropDownSelection extends Component {
  handleLogInClick = e => {
    e.preventDefault();
    console.log("clicked!");
  };

  render() {
    const users = Object.values(this.props.users);
    const { authedUser } = this.props;
    return (
      <Grid container columns={2} style={{ margin: 14 }} centered>
        <Header as="h2" icon textAlign="center" style={{ margin: 12 }}>
          <Icon name="users" circular />
          <Header.Content>
            {authedUser === null
              ? "Hey, Would You Rather..."
              : `Hey ${authedUser.name}
            `}
          </Header.Content>
        </Header>
        <Segment style={{ margin: "auto", width: 500 }}>
          <Dropdown
            style={{ marginBottom: 8 }}
            placeholder="Select User"
            fluid
            selection
            options={users.map(user => {
              return {
                text: user.name,
                value: user.id,
                image: {
                  avatar: true,
                  src: user.avatarURL
                },
                onClick: () => {
                  this.props.dispatch(setAuthedUser(user));
                }
              };
            })}
          />
          <Button primary fluid onClick={this.handleLogInClick}>
            Sign In
          </Button>
        </Segment>
      </Grid>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return { users, authedUser };
}

export default connect(mapStateToProps)(DropDownSelection);
