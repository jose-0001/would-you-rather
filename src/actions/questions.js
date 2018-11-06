import { showLoading, hideLoading } from "react-redux-loading";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_VOTE } from "./actionTypes";

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

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const author = authedUser.id;
    dispatch(showLoading());

    return _saveQuestion({
      author,
      optionOneText,
      optionTwoText
    })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function addVote({ authedUser, qid, answer }) {
  return {
    type: ADD_VOTE,
    authedUser,
    qid,
    answer
  };
}

export function handleAddVote(info) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const authUser = authedUser.id;

    const questionPayload = {
      authedUser: authUser,
      qid: info.qid,
      answer: info.answer
    };

    dispatch(showLoading());
    dispatch(addVote(questionPayload));

    return _saveQuestionAnswer(questionPayload).then(() =>
      dispatch(hideLoading())
    );
  };
}
