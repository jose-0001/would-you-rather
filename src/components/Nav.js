import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Image, Header } from "semantic-ui-react";
import { toggleNav } from "../actions/toggleNav";

class Nav extends Component {
  state = {
    activeItem: ""
  };

  handleItemClick = (e, { name }) => {
    console.log(e.target);
    this.setState({ activeItem: name });
    this.props.dispatch(toggleNav(false));
  };

  handleLogOutClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.dispatch(toggleNav(true));
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        margin: 4%;
      }
    `}</style>
        <Menu attached="top" tabular>
          <Menu.Item
            as={NavLink}
            to="/home"
            name="home"
            value="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/new"
            name="questions"
            value="questions"
            active={activeItem === "questions"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/leaderboard"
            name="leaders"
            value="leaders"
            active={activeItem === "leaders"}
            onClick={this.handleItemClick}
          />
          {!this.props.toggleNav && this.props.authedUser !== null && (
            <Menu.Menu position="right">
              <Menu.Item>
                <Image avatar src={this.props.image} />
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                exact
                to="/"
                name="logout"
                value="logout"
                active={activeItem === "logout"}
                onClick={this.handleLogOutClick}
              />
            </Menu.Menu>
          )}
        </Menu>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, toggleNav }) {
  return {
    authedUser,
    image: authedUser ? authedUser.avatarURL : null,
    toggleNav
  };
}

export default connect(mapStateToProps)(Nav);
