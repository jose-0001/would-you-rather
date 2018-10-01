import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Dropdown,
  Button,
  Header,
  Icon,
  Segment,
  Form
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
            <Header as="h2" icon textAlign="center" color="teal">
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
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                />
                <Button color="teal" fluid onClick={this.handleSignUpClick}>
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
              <Button primary fluid onClick={this.handleLogInClick}>
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
  return { users, authedUser };
}

export default connect(mapStateToProps)(DropDownSelection);
