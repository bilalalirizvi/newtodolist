import { put, call } from "redux-saga/effects";
import swal from "sweetalert";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../configs/firebase";
import {
  CREATE_USER_FAILED,
  CREATE_USER_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
} from "../actions/auth";

export function* createNewUserSaga(action) {
  const { userName, email, password, navigate } = action.payload;
  try {
    const user = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    localStorage.setItem("userId", user.user.uid);
    localStorage.setItem("name", user.user.displayName);
    yield call(updateProfile, user.user, { displayName: userName });
    yield call(addDoc, collection(db, "users"), {
      displayName: userName,
      email: email,
      uid: user.user.uid,
    });
    yield put({
      type: CREATE_USER_SUCCESS,
    });
    swal("", "Account created successfully!", "success");
    navigate("/");
  } catch ({ code, message }) {
    yield put({
      type: CREATE_USER_FAILED,
    });
    swal("", `${message}`, "error");
  }
}

export function* userLoginSaga(action) {
  const { email, password, navigate } = action.payload;
  try {
    const user = yield call(signInWithEmailAndPassword, auth, email, password);
    localStorage.setItem("userId", user.user.uid);
    localStorage.setItem("name", user.user.displayName);
    yield put({
      type: USER_LOGIN_SUCCESS,
    });
    swal("", "Account login successfully!", "success");
    navigate("/");
  } catch ({ code, message }) {
    yield put({
      type: USER_LOGIN_FAILED,
    });
    swal("", `${message}`, "error");
  }
}

export function* logoutSaga(action) {
  const { navigate } = action.payload;
  try {
    yield call(signOut, auth);
    localStorage.clear();
    swal("", "Logout successfully!", "success");
    navigate("/login");
  } catch ({ code, message }) {
    swal("", `${message}`, "error");
  }
}
