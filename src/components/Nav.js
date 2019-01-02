import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { handleLogOut } from "../actions/shared";
import "./Nav.css";

class Nav extends Component {
  handleItemClick = e => {
    const { authedUser } = this.props;
    if (authedUser === null) {
      e.preventDefault();
      return <Redirect to="/" />;
    }
  };

  handleLogOutClick = () => {
    const { dispatch } = this.props;
    dispatch(handleLogOut());
  };

  render() {
    const { authedUser, image } = this.props;
    return (
      <nav className="topNav">
        <div className="left">
          <NavLink
            to="/home"
            name="/home"
            className="navItem left"
            activeClassName="selected"
            onClick={this.handleItemClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            name="/add"
            className="navItem left"
            onClick={this.handleItemClick}
          >
            New Questions
          </NavLink>
          <NavLink
            to="/leaderboard"
            name="/leaderboard"
            className="navItem left"
            onClick={this.handleItemClick}
          >
            Leader Board
          </NavLink>
          {authedUser !== null ? (
            <NavLink
              exact
              to="/"
              name="logout"
              onClick={this.handleLogOutClick}
              className="navItem left"
            >
              Logout
            </NavLink>
          ) : (
            <p>You are not logged in.</p>
          )}
        </div>

        <div className="right">
          <h2 style={{ color: "#black", margin: "10%" }}>{authedUser.name}</h2>
          <img alt="avatar" className="avatar" src={image} />
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    image: authedUser ? authedUser.avatarURL : null
  };
}

export default connect(mapStateToProps)(Nav);
