import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { handleAddUser } from "../actions/users";
import {
  Grid,
  Dropdown,
  Button,
  Header,
  Icon,
  Segment,
  Form
} from "semantic-ui-react";

class Login extends Component {
  state = {
    name: "",
    userId: ""
  };

  handleLogInClick = e => {
    e.preventDefault();
    return <Redirect to="/home" />;
  };

  handleSignUpClick = e => {
    e.preventDefault();
    const { name, userId } = this.state;
    this.props.dispatch(handleAddUser(name, userId));
    this.setState({ name: "", userId: "" });
  };

  handleNameInput = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  handleUserIdInput = e => {
    e.preventDefault();
    this.setState({ userId: e.target.value });
  };

  render() {
    const { authedUser, users } = this.props;
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" icon textAlign="center">
              <Icon name="users" circular />
              <Header.Content>
                {authedUser === null
                  ? "Hey, Would You Rather..."
                  : `Hey ${authedUser.name}
            `}
              </Header.Content>
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Full Name"
                  onChange={this.handleNameInput}
                  value={this.state.name}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                  onChange={this.handleUserIdInput}
                  value={this.state.userId}
                />
                <Button primary fluid onClick={this.handleSignUpClick}>
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Segment>
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
              <Button secondary fluid onClick={this.handleLogInClick}>
                Sign In
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users),
    authedUser
  };
}

export default connect(mapStateToProps)(Login);
