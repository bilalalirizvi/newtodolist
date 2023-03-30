import {
  CREATE_USER_FAILED,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../actions/auth";

const initialState = {
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_USER_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case USER_LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
