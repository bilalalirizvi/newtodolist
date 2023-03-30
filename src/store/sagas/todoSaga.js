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
import { PRIORITY_MODAL_CLOSE, TODO_MODAL_CLOSE } from "../actions/modal";
import {
  CREATE_PROJECT_FAILED,
  CREATE_PROJECT_SUCCESS,
  CREATE_TODO_FAILED,
  CREATE_TODO_SUCCESS,
  GET_PROJECT_FAILED,
  GET_PROJECT_SUCCESS,
  GET_TODO_FAILED,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  IS_COMPLETED_FAILED,
  UPDATE_PRIORITY_FAILED,
  UPDATE_PRIORITY_SUCCESS,
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

// Create Project
export function* createProjectSaga({ payload }) {
  try {
    const ref = collection(db, "projects");
    yield call(addDoc, ref, {
      title: payload.title,
      ...user,
    });
    yield put({
      type: CREATE_PROJECT_SUCCESS,
    });
    yield put({
      type: TODO_MODAL_CLOSE,
    });
    swal("", "Project added successfully", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: CREATE_PROJECT_FAILED,
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
      payload: tempData,
    });
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: GET_TODO_FAILED,
    });
  }
}

// Get Project
export function* getProjectSaga() {
  try {
    const q = query(collection(db, "projects"), where("userId", "==", userId));
    const querySnapshot = yield call(getDocs, q);
    const tempData = [];
    querySnapshot.forEach((doc) => {
      tempData.push({
        ...doc.data(),
        docId: doc.id,
      });
    });
    yield put({
      type: GET_PROJECT_SUCCESS,
      payload: tempData,
    });
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: GET_PROJECT_FAILED,
    });
  }
}

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

// Update Priority
export function* updateIsCompletedSaga({ payload }) {
  console.log("payload saga:", payload);
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
