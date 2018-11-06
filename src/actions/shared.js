import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getInitialData } from "../utils/_DATA";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";

const AUTHED_ID = null;

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

export function handleLogOut() {
  return dispatch => {
    dispatch(showLoading());
    dispatch(setAuthedUser(AUTHED_ID));
    dispatch(hideLoading());
  };
}