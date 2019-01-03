import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Home from "./Home";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import ViewPoll from "./ViewPoll";
import FourOFour from "./FourOFour";
import UnAnsweredQuestion from "./UnAnsweredQuestion";

class App extends Component {
  // Grab all initial data
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          {/* Display Nav only when a user is logged in */}
          {authedUser !== null && <Nav />}
          <header>
            <LoadingBar />
          </header>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/login" />;
              }}
            />
            {/* Private Routes ensures that the user is logged in */}
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/add" component={NewQuestion} />
            <PrivateRoute path="/leaderboard" component={LeaderBoard} />
            <PrivateRoute
              exact
              path="/questions"
              component={UnAnsweredQuestion}
            />
            <PrivateRoute path="/questions/:questionId" component={ViewPoll} />
            <Route path="/login" component={Login} />
            <Route path="/404" component={FourOFour} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Fragment>
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
export default connect(
  mapStateToProps,
  { handleInitialData }
)(App);
