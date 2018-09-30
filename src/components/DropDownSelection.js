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

class DropDownSelection extends Component {
  handleLogInClick = e => {
    e.preventDefault();
    console.log("clicked!");
  };

  render() {
    const users = Object.values(this.props.users);
    const open = false;
    return (
      <Grid
        container
        columns={2}
        style={{ margin: 14}}
        centered
      >
        <Header as="h2" icon textAlign="center" style={{ margin: 12 }}>
          <Icon name="users" circular />
          <Header.Content>Would You Rather...</Header.Content>
        </Header>
        <Segment style={{ margin: "auto", width: 500 }}>
          <Dropdown
            style={{ marginBottom: 8 }}
            placeholder="Select User"
            fluid
            selection
            options={users.map(u => {
              return {
                text: u.name,
                value: u.id,
                image: {
                  avatar: true,
                  src: u.avatarURL
                }
              };
            })}
          />
          <Button primary fluid onClick={this.handleLogInClick}>
            Login
          </Button>
        </Segment>
      </Grid>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(DropDownSelection);
