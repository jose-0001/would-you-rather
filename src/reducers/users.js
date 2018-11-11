import {
  RECEIVE_USERS,
  ADD_USER,
  ADD_VOTE,
  ADD_QUESTION
} from "../actions/actionTypes";

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
    case ADD_QUESTION:
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, id]
        }
      };
    default:
      return state;
  }
}
