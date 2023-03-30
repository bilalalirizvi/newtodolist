import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import todoReducer from "./todoReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  Theme: themeReducer,
  Auth: authReducer,
  Todo: todoReducer,
  Modal: modalReducer,
});
