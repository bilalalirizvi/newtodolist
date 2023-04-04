import { put, call } from "redux-saga/effects";
import swal from "sweetalert";
import { storage, db, auth } from "../../configs/firebase";
import { updateEmail, updatePassword } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  UPDATE_PICTURE_SUCCESS,
  UPDATE_PICTURE_FAILED,
  UPDATE_PICTURE_URL_REDUX,
  UPDATE_NAME_SUCCESS,
  UPDATE_NAME_FAILED,
  UPDATE_NAME_REDUX,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAILED,
  UPDATE_EMAIL_REDUX,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILED,
} from "../actions/setting";
import { info } from "../../constants/others";

export function* updatePictureSaga(action) {
  const { userId } = info();
  const { file } = action.payload;
  try {
    const pictureRref = ref(storage, `images/${userId}`);
    yield call(uploadBytes, pictureRref, file);
    const pathReference = ref(storage, `images/${userId}`);
    const url = yield call(getDownloadURL, pathReference);
    yield put({
      type: UPDATE_PICTURE_URL_REDUX,
      payload: url,
    });
    yield put({
      type: UPDATE_PICTURE_SUCCESS,
    });
    swal("", "Picture Uploaded!", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: UPDATE_PICTURE_FAILED,
    });
  }
}

export function* updateDisplayNameSaga(action) {
  const { docId, name } = action.payload;
  try {
    const reference = doc(db, "users", docId);
    yield call(updateDoc, reference, { displayName: name });
    const docRef = doc(db, "users", docId);
    const docSnap = yield call(getDoc, docRef);
    yield put({
      type: UPDATE_NAME_REDUX,
      payload: docSnap.data()?.displayName,
    });
    yield put({
      type: UPDATE_NAME_SUCCESS,
    });
    swal("", "Display Name Updated!", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: UPDATE_NAME_FAILED,
    });
  }
}

export function* updateEmailSaga(action) {
  const { docId, email } = action.payload;
  try {
    yield call(updateEmail, auth.currentUser, email);
    const docRef = doc(db, "users", docId);
    yield call(updateDoc, docRef, { email: email });
    const docSnap = yield call(getDoc, docRef);
    yield put({
      type: UPDATE_EMAIL_REDUX,
      payload: docSnap.data()?.email,
    });
    yield put({
      type: UPDATE_EMAIL_SUCCESS,
    });
    swal("", "Email Updated!", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: UPDATE_EMAIL_FAILED,
    });
  }
}

export function* updatePasswordSaga(action) {
  try {
    yield call(updatePassword, auth.currentUser, action.payload);
    yield put({
      type: UPDATE_PASSWORD_SUCCESS,
    });
    swal("", "Password Updated!", "success");
  } catch ({ message }) {
    swal("", `${message}`, "error");
    yield put({
      type: UPDATE_PASSWORD_FAILED,
    });
  }
}
