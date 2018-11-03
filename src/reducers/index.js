import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import toggleNav from "./toggleNav";
import answer from "./answer";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authedUser,
  users,
  questions,
  answer,
  toggleNav,
  loadingBar: loadingBarReducer
});
