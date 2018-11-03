import React, { Component } from "react";

class SignUp extends Component {
  state = {
    name: "",
    userId: "",
    gender: ""
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
    return (
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
            <Button onClick={this.handleInput} name="gender" value="female">
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
    );
  }
}
