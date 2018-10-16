import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleNav, handleLogOut } from "../actions/toggleNav";

class Nav extends Component {
  state = {
    activeItem: ""
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.dispatch(toggleNav(false));
  };

  handleLogOutClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.dispatch(handleLogOut());
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <style>{`
      .topNav {
        list-style-type:none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        max-height: 82px;
      }

      .topNav .left {
        float: left;
      }

      .topNav a {
        display: block;
        border-radius: 5%;
        color: white;
        text-align: center;
        padding: 3%;
        text-decoration: none;
        max-height: 79px;
      }

      .topNav a:hover:not(.active) {
        background-color: #111;
        max-height: 79px;
      }

      .topNav a.active{
        background-color: #4CA0AF;
      }

      .right {
        float: right;
        display: inline-block;
        max-width: 15%;
        width: 15%;
        padding: 5px 1% 0 1%;
      }

      .avatar {
        width: 50%;
        border-radius: 50%;
      }

      .logout {
        float: right;
        position: relative;
        top: 15px;
        right: 5px;
      }

      @media screen and (max-width: 600px) {
        .topNav .right,
        .topNav .left {
          float: none
        }
      }
    `}</style>
        <div className="topNav">
          <NavLink exact to="/home" className="navItem left" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/new" className="navItem left" activeClassName="active">
            Questions
          </NavLink>
          <NavLink
            to="/leaderboard"
            className="navItem left"
            activeClassName="active"
          >
            Leaders
          </NavLink>
          {!this.props.toggleNav &&
            this.props.authedUser !== null && (
              <div className="right">
                <img alt="avatar" className="avatar" src={this.props.image} />
                <NavLink
                  exact
                  to="/"
                  name="logout"
                  value="logout"
                  onClick={this.handleLogOutClick}
                  className="logout"
                >
                  Logout
                </NavLink>
              </div>
            )}
        </div>
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
