import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import toggleNav from "./toggleNav";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authedUser,
  users,
  questions,
  toggleNav,
  loadingBar: loadingBarReducer
});
