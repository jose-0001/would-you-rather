import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

class Nav extends Component {
  state = {
    activeItem: "home"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
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

export default Nav;
