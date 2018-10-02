import { saveUser } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER = "ADD_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    user
  };
}

export function handleAddUser(name, id) {
  return dispatch => {
    dispatch(showLoading());

    return saveUser(name, id)
      .then(user => dispatch(addUser(user)))
      .then(() => dispatch(hideLoading()));
  };
}
