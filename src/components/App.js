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
import LeaderBoard from "./LeaderBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Switch>
          <Fragment>
            <div>
              <Nav />
            </div>
            <div>
              <Route
                exact
                path="/"
                render={() => {
                  return <Redirect to="/login" />;
                }}
              />
              <Route path="/login" component={Login} />

                <Fragment>
                  <Route path="/home" component={Dashboard} />
                  <Route path="/questions" component={NewQuestion} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                </Fragment>

            </div>
          </Fragment>
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

// to gain access to dispatch we need to connect
export default connect(mapStateToProps)(App);
