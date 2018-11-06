import { RECEIVE_USERS, ADD_USER, ADD_VOTE } from "../actions/actionTypes";

export default function user(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_USER:
      const { user } = action;
      return {
        ...state,
        [user.id]: { user }
      };
    case ADD_VOTE:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    default:
      return state;
  }
}
