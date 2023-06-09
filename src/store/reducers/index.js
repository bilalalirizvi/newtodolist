import { combineReducers } from "redux";
import { LOGOUT_REQUEST } from "../actions/auth";
import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import todoReducer from "./todoReducer";
import modalReducer from "./modalReducer";
import noteReducer from "./noteReducer";
import projectReducer from "./projectReducer";
import settingReducer from "./settingReducer";

// export default combineReducers({
//   Theme: themeReducer,
//   Auth: authReducer,
//   Todo: todoReducer,
//   Modal: modalReducer,
//   Note: noteReducer,
//   Project: projectReducer,
// });

const appReducer = combineReducers({
  Theme: themeReducer,
  Auth: authReducer,
  Todo: todoReducer,
  Modal: modalReducer,
  Note: noteReducer,
  Project: projectReducer,
  Setting: settingReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_REQUEST) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
