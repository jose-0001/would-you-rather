import { showLoading, hideLoading } from "react-redux-loading";
import { setAuthedUser } from "./authedUser";
import { TOGGLE_NAV } from "./actionTypes";

export function toggleNav(bool) {
  return {
    type: TOGGLE_NAV,
    bool
  };
}

export function handleLogOut() {
  return dispatch => {
    dispatch(showLoading());
    dispatch(setAuthedUser(null));
    dispatch(toggleNav(true));
    dispatch(hideLoading());
  };
}
