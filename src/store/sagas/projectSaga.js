import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";
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
import { info } from "../../constants/others";

// Create
export function* createProjectSaga({ payload }) {
  const { userId, updatedBy, createdBy } = info();
  try {
    const ref = collection(db, "projects");
    yield call(addDoc, ref, {
      ...payload,
      userId,
      updatedBy,
      createdBy,
    });
    yield put({
      type: CREATE_PROJECT_SUCCESS,
    });
    yield put({
      type: TODO_MODAL_CLOSE,
    });
    yield put({
      type: GET_PROJECT_REQUEST,
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
  const { userId } = info();
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
  const { updatedBy } = info();

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
  try {
    const batch = writeBatch(db);
    const q = query(
      collection(db, "todos"),
      where("type", "==", payload.docId)
    );
    const querySnapshot = yield call(getDocs, q);
    querySnapshot.forEach((doc) => batch.delete(doc.ref));
    batch.commit();

    const ref = doc(db, "projects", payload.docId);
    yield call(deleteDoc, ref);
    yield put({
      type: GET_PROJECT_REQUEST,
    });
    yield put({
      type: GET_TODO_REQUEST,
    });
    payload.navigate("/projects");
  } catch ({ message }) {
    swal("", `${message}`, "error");
  }
}
