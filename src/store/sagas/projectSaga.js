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
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILED,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILED,
} from "../actions/project";

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
