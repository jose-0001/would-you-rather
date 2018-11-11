import { SET_AUTHED_USER } from "../actions/actionTypes";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
    const {name, id, avatarURL} = action;
      return {
        name,
        id,
        avatarURL
      }
    default:
      return state;
  }
}
