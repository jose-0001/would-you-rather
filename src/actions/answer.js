import { _saveQuestionAnswer } from "../utils/_DATA";

export const SAVE_ANSWER = "SAVE_ANSWER";

export function saveAnswer(answer) {
  return {
    type: SAVE_ANSWER,
    answer
  };
}

export function handleSaveAnswer(authedUser, qid, answer) {
  return dispatch => {
    return _saveQuestionAnswer(authedUser, qid, answer).then(
      dispatch(saveAnswer(answer))
    );
  };
}
