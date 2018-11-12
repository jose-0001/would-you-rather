import { SET_AUTHED_USER } from "./actionTypes";

export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHED_USER,
    authedUser
  };
}
