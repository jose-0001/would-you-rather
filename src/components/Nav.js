import React, { Component, Fragment } from "react";
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
        background-color: #4CA0AF;
        max-height: 79px;
      }

      .right {
        float: right;
        display: inline-block;
        max-width: 15%;
        position: relative;
        left: 2%;
      }

      .avatar {
        width: 50%;
        border-radius: 50%;
      }

      .logout {
        float: right;
      }

      @media screen and (max-width: 600px) {
        .topNav .right,
        .topNav .left {
          float: none
        }
      }
    `}</style>
        <div className="topNav">
          <NavLink
            to="/home"
            className="navItem left"
            activeClassName="selected"
          >
            Home
          </NavLink>
          <NavLink to="/questions" className="navItem left">
            Questions
          </NavLink>
          <NavLink to="/leaderboard" className="navItem left">
            Leaders
          </NavLink>
          {!this.props.toggleNav &&
            this.props.authedUser !== null && (
              <Fragment>
                <div className="right">
                  <img alt="avatar" className="avatar" src={this.props.image} />
                </div>
                <NavLink
                  exact
                  to="/"
                  name="logout"
                  onClick={this.handleLogOutClick}
                  className="logout"
                >
                  Logout
                </NavLink>
              </Fragment>
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
