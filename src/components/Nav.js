import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { toggleNav, handleLogOut } from "../actions/toggleNav";

class Nav extends Component {
  handleItemClick = e => {
    const { authedUser, dispatch } = this.props;
    if (authedUser === null) {
      e.preventDefault();
      return <Redirect to="/" />;
    } else {
      dispatch(toggleNav(false));
    }
  };

  handleLogOutClick = () => {
    const { dispatch } = this.props;
    dispatch(handleLogOut());
  };

  render() {
    const { toggleNav, authedUser, image } = this.props;
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
            name="/home"
            className="navItem left"
            activeClassName="selected"
            onClick={this.handleItemClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/new"
            name="/new"
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
          {!toggleNav &&
            authedUser !== null && (
              <Fragment>
                <div className="right">
                  <img alt="avatar" className="avatar" src={image} />
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

function mapStateToProps({ authedUser, toggleNav }) {
  return {
    authedUser,
    image: authedUser ? authedUser.avatarURL : null,
    toggleNav
  };
}

export default connect(mapStateToProps)(Nav);
