import { all, takeEvery } from "redux-saga/effects";
import {
  CREATE_USER_REQUEST,
  LOGOUT_REQUEST,
  USER_LOGIN_REQUEST,
} from "../actions/auth";
import {
  CREATE_PROJECT_REQUEST,
  CREATE_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  GET_PROJECT_REQUEST,
  GET_TODO_REQUEST,
  UPDATE_PRIORITY_REQUEST,
} from "../actions/todo";
import { createNewUserSaga, logoutSaga, userLoginSaga } from "./authSaga";
import {
  createProjectSaga,
  createTodoSaga,
  deleteTodoSaga,
  getProjectSaga,
  getTodoSaga,
  updatePrioritySaga,
} from "./todoSaga";

export default function* rootSagas() {
  yield all([takeEvery(CREATE_USER_REQUEST, createNewUserSaga)]);
  yield all([takeEvery(USER_LOGIN_REQUEST, userLoginSaga)]);
  yield all([takeEvery(LOGOUT_REQUEST, logoutSaga)]);
  yield all([takeEvery(CREATE_TODO_REQUEST, createTodoSaga)]);
  yield all([takeEvery(CREATE_PROJECT_REQUEST, createProjectSaga)]);
  yield all([takeEvery(GET_TODO_REQUEST, getTodoSaga)]);
  yield all([takeEvery(GET_PROJECT_REQUEST, getProjectSaga)]);
  yield all([takeEvery(UPDATE_PRIORITY_REQUEST, updatePrioritySaga)]);
  yield all([takeEvery(DELETE_TODO_REQUEST, deleteTodoSaga)]);
}
