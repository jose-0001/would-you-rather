import { RECEIVE_USERS, ADD_USER, ADD_VOTE } from "../actions/actionTypes";

export default function user(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_USER:
      return {
        ...state,
        [action.user.id]: { ...action.user }
      };
    case ADD_VOTE:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };
    default:
      return state;
  }
}
