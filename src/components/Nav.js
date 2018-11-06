import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { handleLogOut } from "../actions/shared";

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
      <div>
        <style>{`
      .topNav {
        list-style-type:none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        max-height: 170px;
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
        max-width: 40%;
        margin-top: 10px;
      }

      .avatar {
        margin-top: 5px;
        float: right;
        width: 11%;
        border-radius: 50%;
      }

      .logout {
        float: left;
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
          {authedUser !== null && (
              <NavLink
                exact
                to="/"
                name="logout"
                onClick={this.handleLogOutClick}
                className="navItem left"
              >
                Logout
              </NavLink>
            )}

          {authedUser !== null && (
              <Fragment>
                <div className="right">
                  <h1
                    style={{
                      float: "right",
                      position: "relative",
                      top: "20px",
                      color: "#f7f7f7",
                      margin: "0 15px"
                    }}
                  >
                    {authedUser.name}
                  </h1>
                  <img alt="avatar" className="avatar" src={image} />
                </div>
              </Fragment>
            )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    image: authedUser ? authedUser.avatarURL : null,
  };
}

export default connect(mapStateToProps)(Nav);
