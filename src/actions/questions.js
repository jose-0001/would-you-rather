import { showLoading, hideLoading } from "react-redux-loading";
import { _saveQuestion } from "../utils/_DATA";
import { RECEIVE_QUESTIONS, ADD_QUESTION } from "./actionTypes";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return _saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText
    }).then(question =>
      dispatch(addQuestion(question)).then(() => dispatch(hideLoading()))
    );
  };
}
