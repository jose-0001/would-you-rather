import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { handleAddUser } from "../actions/users";
import { toggleNav } from "../actions/toggleNav";
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
    userId: "",
    gender: ""
  };

  handleLogInClick = e => {
    const { history, dispatch } = this.props;
    e.preventDefault();
    history.push("/home");
    dispatch(toggleNav(false));
  };

  handleSignUpClick = e => {
    e.preventDefault();
    const { name, userId, gender } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddUser(name, userId, gender));
    this.setState({ name: "", userId: "" });
    alert("User Successfully created! Select user and Log In to continue.");
  };

  handleInput = e => {
    const { name, value } = e.target;
    e.preventDefault();
    this.setState({ [name]: value });
  };

  render() {
    const { name, userId } = this.state;
    const { authedUser, users } = this.props;
    return (
      <div style={{ margin: "4% 2%" }}>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" icon textAlign="center">
              {authedUser !== null ? (
                <div>
                  <img
                    src={authedUser.avatarURL}
                    alt="avatar"
                    style={{
                      borderRadius: "50%",
                      width: "50%"
                    }}
                  />
                </div>
              ) : (
                <Icon name="users" circular />
              )}

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
                  onChange={this.handleInput}
                  name="name"
                  value={name}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                  onChange={this.handleInput}
                  name="userId"
                  value={userId}
                />
                <Button.Group>
                  <Button onClick={this.handleInput} name="gender" value="male">
                    Male
                  </Button>
                  <Button.Or />
                  <Button
                    onClick={this.handleInput}
                    name="gender"
                    value="female"
                  >
                    Female
                  </Button>
                </Button.Group>
                <Button
                  primary
                  fluid
                  onClick={this.handleSignUpClick}
                  style={{ marginTop: "1%" }}
                >
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
                Log In
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser, toggleNav }) {
  return {
    users: Object.values(users),
    authedUser,
    toggleNav
  };
}

export default connect(mapStateToProps)(Login);
