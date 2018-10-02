import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Image, Header } from "semantic-ui-react";

class Nav extends Component {
  state = {
    activeItem: "home"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    console.log(this.props);
    const { activeItem } = this.state;
    return (
      <Menu attached="top" tabular>
        <Menu.Item
          as={NavLink}
          to="/home"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/new"
          name="New Question"
          active={activeItem === "New Question"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/leaderboard"
          name="Leader Board"
          active={activeItem === "Leader Board"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Image avatar src={this.props.image} />
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/login"
            name="Log Out"
            active={activeItem === "Log Out"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    image: Object.values(users)
      .filter(user => user.id === authedUser)
      .map(image => image.avatarURL)[0]
  };
}

export default connect(mapStateToProps)(Nav);
