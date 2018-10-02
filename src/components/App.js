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
  state = {
    navBarHidden: true
  };
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Switch>
          <Fragment>
            {this.state.navBarHidden === false ? <Nav /> : null}
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/login" />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Dashboard} />
            <Route path="/new" component={NewQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />
          </Fragment>
        </Switch>
      </Router>
    );
  }
}

// to gain access to dispatch we need to connect
export default connect()(App);
