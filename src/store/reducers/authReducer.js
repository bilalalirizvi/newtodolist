import {
  CREATE_USER_FAILED,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_CURRENT_USER_FAILED,
  GET_CURRENT_USER_SUCCESS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../actions/auth";
import {
  UPDATE_EMAIL_REDUX,
  UPDATE_NAME_REDUX,
  UPDATE_PICTURE_URL_REDUX,
} from "../actions/setting";

const initialState = {
  loading: false,
  user: {},
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
    case GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        user: payload,
      };
    }
    case GET_CURRENT_USER_FAILED: {
      return {
        ...state,
        user: {},
      };
    }
    case UPDATE_PICTURE_URL_REDUX: {
      return {
        ...state,
        user: { ...state.user, photoUrl: payload },
      };
    }
    case UPDATE_NAME_REDUX: {
      return {
        ...state,
        user: { ...state.user, displayName: payload },
      };
    }
    case UPDATE_EMAIL_REDUX: {
      return {
        ...state,
        user: { ...state.user, email: payload },
      };
    }
    case PASSWORD_RESET_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case PASSWORD_RESET_FAILED: {
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
