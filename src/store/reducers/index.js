import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import todoReducer from "./todoReducer";
import modalReducer from "./modalReducer";
import noteReducer from "./noteReducer";

export default combineReducers({
  Theme: themeReducer,
  Auth: authReducer,
  Todo: todoReducer,
  Modal: modalReducer,
  Note: noteReducer,
});
