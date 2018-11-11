import { SET_AUTHED_USER } from "./actionTypes";
import { showLoading } from "react-redux-loading";
import { hideLoading } from "react-redux-loading-bar";

export function setAuthedUser(name, id, avatarURL) {
  return {
    type: SET_AUTHED_USER,
    name,
    id,
    avatarURL
  };
}

export function handleAuthedUser(name, id, avatarURL) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    if (authedUser !== null) {
      return dispatch(setAuthedUser(name, id, avatarURL)).then(() =>
        dispatch(hideLoading())
      );
    } else {
      dispatch(hideLoading());
      return null;
    }
  };
}
