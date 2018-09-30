import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Dropdown } from "semantic-ui-react";

class DropDownSelection extends Component {
  render() {
    const users = Object.values(this.props.users);
    return (
      <Grid container centered columns={2} style={{ margin: 14 }}>
        <Dropdown
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
            }
          })}
        />
      </Grid>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(DropDownSelection);
