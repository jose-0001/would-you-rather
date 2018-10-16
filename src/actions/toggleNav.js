import { setAuthedUser } from "./authedUser";
export const TOGGLE_NAV = "TOGGLE_NAV";

export function toggleNav(bool){
  return {
    type: TOGGLE_NAV,
    bool
  }
}

export function handleLogOut(){
  return dispatch => {
    dispatch(setAuthedUser(null));
    dispatch(toggleNav(true))
  }
}