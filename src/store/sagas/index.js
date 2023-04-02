import { all, takeEvery } from "redux-saga/effects";
import {
  CREATE_USER_REQUEST,
  LOGOUT_REQUEST,
  USER_LOGIN_REQUEST,
} from "../actions/auth";
import {
  CREATE_NOTE_REQUEST,
  GET_NOTE_REQUEST,
  UPDATE_NOTE_REQUEST,
  DELETE_NOTE_REQUEST,
} from "../actions/note";
import {
  CREATE_TODO_REQUEST,
  GET_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  IS_COMPLETED_REQUEST,
  UPDATE_PRIORITY_REQUEST,
} from "../actions/todo";
import {
  CREATE_PROJECT_REQUEST,
  DELETE_ALL_PROJECT_TODO_REQUEST,
  DELETE_PROJECT_REQUEST,
  GET_PROJECT_REQUEST,
  UPDATE_PROJECT_REQUEST,
} from "../actions/project";
import { createNewUserSaga, logoutSaga, userLoginSaga } from "./authSaga";
import {
  createNoteSaga,
  deleteNoteSaga,
  getNoteSaga,
  updateNoteSaga,
} from "./noteSaga";
import {
  createTodoSaga,
  deleteTodoSaga,
  getTodoSaga,
  updateIsCompletedSaga,
  updatePrioritySaga,
  updateTodoSaga,
} from "./todoSaga";
import {
  createProjectSaga,
  deleteAllProjectTodoSaga,
  deleteProjectSaga,
  getProjectSaga,
  updateProjectSaga,
} from "./projectSaga";

export default function* rootSagas() {
  // Auth
  yield all([takeEvery(CREATE_USER_REQUEST, createNewUserSaga)]);
  yield all([takeEvery(USER_LOGIN_REQUEST, userLoginSaga)]);
  yield all([takeEvery(LOGOUT_REQUEST, logoutSaga)]);

  // Is completed
  yield all([takeEvery(IS_COMPLETED_REQUEST, updateIsCompletedSaga)]);

  // Priority
  yield all([takeEvery(UPDATE_PRIORITY_REQUEST, updatePrioritySaga)]);
  // Todo

  yield all([takeEvery(CREATE_TODO_REQUEST, createTodoSaga)]);
  yield all([takeEvery(GET_TODO_REQUEST, getTodoSaga)]);
  yield all([takeEvery(UPDATE_TODO_REQUEST, updateTodoSaga)]);
  yield all([takeEvery(DELETE_TODO_REQUEST, deleteTodoSaga)]);

  // Project
  yield all([takeEvery(CREATE_PROJECT_REQUEST, createProjectSaga)]);
  yield all([takeEvery(GET_PROJECT_REQUEST, getProjectSaga)]);
  yield all([takeEvery(UPDATE_PROJECT_REQUEST, updateProjectSaga)]);
  yield all([takeEvery(DELETE_PROJECT_REQUEST, deleteProjectSaga)]);
  yield all([
    takeEvery(DELETE_ALL_PROJECT_TODO_REQUEST, deleteAllProjectTodoSaga),
  ]);

  // Notes
  yield all([takeEvery(CREATE_NOTE_REQUEST, createNoteSaga)]);
  yield all([takeEvery(GET_NOTE_REQUEST, getNoteSaga)]);
  yield all([takeEvery(UPDATE_NOTE_REQUEST, updateNoteSaga)]);
  yield all([takeEvery(DELETE_NOTE_REQUEST, deleteNoteSaga)]);
}
