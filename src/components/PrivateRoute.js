import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
  <Route {...rest} render={props => (
    authedUser !== null
    ? <Component {...props} />
    : <Redirect to={{
      pathname: "/login",
      state: { from: props.location }
    }} />
  )} />
)

export default connect(({ authedUser }) => {
  return { authedUser };
})(PrivateRoute);