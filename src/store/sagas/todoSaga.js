import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { put, call } from "redux-saga/effects";
import swal from "sweetalert";
import { db } from "../../configs/firebase";
import { sortDataByDate } from "../../utils";
import { PRIORITY_MODAL_CLOSE, TODO_MODAL_CLOSE } from "../actions/modal";
import {
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILED,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILED,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,
  UPDATE_PRIORITY_SUCCESS,
  UPDATE_PRIORITY_FAILED,
  IS_COMPLETED_FAILED,
} from "../actions/todo";

const userId = localStorage.getItem("userId");
const updatedBy = new Date().toISOString();

const user = {
  userId,
  createdBy: new Date().toISOString(),
  updatedBy: new Date().toISOString(),
};

// Create Todo
export function* createTodoSaga({ payload }) {
  try {
    const ref = collection(db, "todos");
    yield call(addDoc, ref, { ...payload, ...user });
    yield put({
      type: GET_TODO_REQUEST,
    });
    yield put({
      type: CREATE_TODO_SUCCESS,
    });
    yield put({
      type: TODO_MODAL_CLOSE,
    });
    swal("", "Todo added successfully", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: CREATE_TODO_FAILED,
    });
  }
}

// Get Todo
export function* getTodoSaga() {
  try {
    const q = query(collection(db, "todos"), where("userId", "==", userId));
    const querySnapshot = yield call(getDocs, q);
    const tempData = [];
    querySnapshot.forEach((doc) => {
      tempData.push({
        ...doc.data(),
        docId: doc.id,
      });
    });
    yield put({
      type: GET_TODO_SUCCESS,
      payload: sortDataByDate(tempData),
    });
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: GET_TODO_FAILED,
    });
  }
}

// Update Todo
export function* updateTodoSaga({ payload }) {
  try {
    const ref = doc(db, "todos", payload.docId);
    delete payload["docId"];
    yield call(updateDoc, ref, {
      ...payload,
      updatedBy: updatedBy,
    });
    yield put({
      type: GET_TODO_REQUEST,
    });
    yield put({
      type: UPDATE_TODO_SUCCESS,
    });
    yield put({
      type: TODO_MODAL_CLOSE,
    });
    swal("", "Updated successfully", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: UPDATE_TODO_FAILED,
    });
  }
}

// Delete Todo
export function* deleteTodoSaga({ payload }) {
  try {
    const ref = doc(db, "todos", payload);
    yield call(deleteDoc, ref);
    yield put({
      type: GET_TODO_REQUEST,
    });
  } catch ({ message }) {
    swal("", `${message}`, "error");
  }
}

// -----------------------------------------------

// Update Priority
export function* updatePrioritySaga({ payload }) {
  try {
    const ref = doc(db, "todos", payload.docId);
    yield call(updateDoc, ref, {
      priority: payload.priority,
      updatedBy: updatedBy,
    });
    yield put({
      type: GET_TODO_REQUEST,
    });
    yield put({
      type: UPDATE_PRIORITY_SUCCESS,
    });
    yield put({
      type: PRIORITY_MODAL_CLOSE,
    });
    swal("", "Updated successfully", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: UPDATE_PRIORITY_FAILED,
    });
  }
}

// Update IsCompeleted
export function* updateIsCompletedSaga({ payload }) {
  try {
    const ref = doc(db, "todos", payload.docId);
    yield call(updateDoc, ref, {
      isCompleted: !payload.isCompleted,
      updatedBy: updatedBy,
    });
    yield put({
      type: GET_TODO_REQUEST,
    });
    swal("", "Updated successfully", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: IS_COMPLETED_FAILED,
    });
  }
}
