import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/login" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Fragment>
      </Router>
    );
  }
}

const LoginContainer = () => (
  <div>
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
);

const DefaultContainer = () => (
  <div>
    <Nav />
    <Route path="/home" component={Dashboard} />
    <Route path="/new" component={NewQuestion} />
    <Route path="/leaderboard" component={LeaderBoard} />
  </div>
);

// to gain access to dispatch we need to connect
export default connect()(App);
