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
import { Navigate } from "react-router-dom";
import { put, call } from "redux-saga/effects";
import swal from "sweetalert";
import { db } from "../../configs/firebase";
import { sortDataByDate } from "../../utils";
import { TODO_MODAL_CLOSE } from "../actions/modal";
import {
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILED,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILED,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILED,
  GET_PROJECT_REQUEST,
} from "../actions/project";
import { GET_TODO_REQUEST } from "../actions/todo";

const userId = localStorage.getItem("userId");
const updatedBy = new Date().toISOString();

const user = {
  userId,
  createdBy: new Date().toISOString(),
  updatedBy: new Date().toISOString(),
};

// Create
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

// Get
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
      payload: sortDataByDate(tempData),
    });
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: GET_PROJECT_FAILED,
    });
  }
}

// Update
export function* updateProjectSaga({ payload }) {
  try {
    const ref = doc(db, "projects", payload.docId);
    yield call(updateDoc, ref, {
      ...payload,
      updatedBy: updatedBy,
    });
    yield put({
      type: GET_TODO_REQUEST,
    });
    yield put({
      type: UPDATE_PROJECT_SUCCESS,
    });
    yield put({
      type: TODO_MODAL_CLOSE,
    });
    swal("", "Updated successfully", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: UPDATE_PROJECT_FAILED,
    });
  }
}

// Delete
export function* deleteProjectSaga({ payload }) {
  try {
    const ref = doc(db, "projects", payload.docId);
    yield call(deleteDoc, ref);
    yield put({
      type: GET_PROJECT_REQUEST,
    });
    payload.navigate("/projects");
  } catch ({ message }) {
    swal("", `${message}`, "error");
  }
}

// Delete
export function* deleteAllProjectTodoSaga({ payload }) {
  console.log("payload:", payload);
  // try {
  //   const ref = doc(db, "projects", payload.docId);
  //   yield call(deleteDoc, ref);
  //   yield put({
  //     type: GET_PROJECT_REQUEST,
  //   });
  //   payload.navigate("/projects");
  // } catch ({ message }) {
  //   swal("", `${message}`, "error");
  // }
}
