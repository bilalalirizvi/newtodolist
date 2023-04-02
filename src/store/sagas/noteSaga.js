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
import { TODO_MODAL_CLOSE } from "../actions/modal";
import {
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILED,
  GET_NOTE_REQUEST,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILED,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILED,
} from "../actions/note";

const userId = localStorage.getItem("userId");
const updatedBy = new Date().toISOString();

const user = {
  userId,
  createdBy: new Date().toISOString(),
  updatedBy: new Date().toISOString(),
};

// Create
export function* createNoteSaga({ payload }) {
  try {
    const ref = collection(db, "notes");
    yield call(addDoc, ref, { ...payload, ...user });
    yield put({
      type: CREATE_NOTE_SUCCESS,
    });
    yield put({
      type: GET_NOTE_REQUEST,
    });
    yield put({
      type: TODO_MODAL_CLOSE,
    });
    swal("", "Note added successfully", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: CREATE_NOTE_FAILED,
    });
  }
}

// Get
export function* getNoteSaga() {
  try {
    const q = query(collection(db, "notes"), where("userId", "==", userId));
    const querySnapshot = yield call(getDocs, q);
    const tempData = [];
    querySnapshot.forEach((doc) => {
      tempData.push({
        ...doc.data(),
        docId: doc.id,
      });
    });
    yield put({
      type: GET_NOTE_SUCCESS,
      payload: sortDataByDate(tempData),
    });
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: GET_NOTE_FAILED,
    });
  }
}

// Update
export function* updateNoteSaga({ payload }) {
  try {
    const ref = doc(db, "notes", payload.docId);
    yield call(updateDoc, ref, {
      ...payload,
      updatedBy: updatedBy,
    });
    yield put({
      type: GET_NOTE_REQUEST,
    });
    yield put({
      type: UPDATE_NOTE_SUCCESS,
    });
    yield put({
      type: TODO_MODAL_CLOSE,
    });
    swal("", "Updated successfully", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: UPDATE_NOTE_FAILED,
    });
  }
}

// Delete
export function* deleteNoteSaga({ payload }) {
  try {
    const ref = doc(db, "notes", payload);
    yield call(deleteDoc, ref);
    yield put({
      type: GET_NOTE_REQUEST,
    });
  } catch ({ message }) {
    swal("", `${message}`, "error");
  }
}
