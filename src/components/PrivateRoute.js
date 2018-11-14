import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest, authedUser }) => (
  <Route {...rest} render={props => (
    authedUser !== null
    ? <Component {...props} />
    : <Redirect to="/login" />
  )} />
)

export default connect(({ authedUser }) => {
  return { authedUser };
})(PrivateRoute);