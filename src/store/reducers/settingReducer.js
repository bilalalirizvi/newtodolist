import {
  UPDATE_PICTURE_REQUEST,
  UPDATE_PICTURE_SUCCESS,
  UPDATE_PICTURE_FAILED,
  UPDATE_NAME_REQUEST,
  UPDATE_NAME_SUCCESS,
  UPDATE_NAME_FAILED,
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAILED,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILED,
} from "../actions/setting";

const initialState = {
  loading: false,
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PICTURE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_PICTURE_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_PICTURE_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_NAME_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_NAME_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_NAME_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_EMAIL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_EMAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_EMAIL_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_PASSWORD_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default settingReducer;
