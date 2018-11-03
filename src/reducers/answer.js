import { SAVE_ANSWER } from "../actions/answer";

export default function answer(state = {}, action) {
  switch (action.type) {
    case SAVE_ANSWER:
      return state.users.answers;
    default:
      return state;
  }
}
