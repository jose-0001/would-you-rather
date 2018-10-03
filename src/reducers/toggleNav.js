import { TOGGLE_NAV } from "../actions/toggleNav";

export default function toggleNav(state = true, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return action.bool;
    default:
      return state;
  }
}
