import { saveUser } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";
import { RECEIVE_USERS, ADD_USER } from "./actionTypes";

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

export function handleAddUser(name, id, gender) {
  return dispatch => {
    dispatch(showLoading());

    return saveUser(name, id, gender)
      .then(user => dispatch(addUser(user)))
      .then(() => dispatch(hideLoading()));
  };
}
