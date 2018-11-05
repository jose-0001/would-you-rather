import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/actionTypes";

export default function user(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    default:
      return state;
  }
}
