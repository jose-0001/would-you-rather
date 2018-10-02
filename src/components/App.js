import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <Nav />
              <Route path="/" exact component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/new" component={NewQuestion} />
              <Route path="/question/:id" component={QuestionPage} />
          </div>
        </Fragment>
      </Router>
    )
  }
}


// to gain access to dispatch we need to connect
export default connect()(App);
