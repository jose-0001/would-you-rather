import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { getInitialData } from "../utils/_DATA";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(_getUsers(users));
      dispatch(_getQuestions(questions));
    })
  };
}
