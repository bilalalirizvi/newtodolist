import {
  CREATE_NOTE_FAILED,
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  GET_NOTE_REQUEST,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILED,
} from "../actions/note";

const initialState = {
  loading: false,
  notes: [],
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_NOTE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_NOTE_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_NOTE_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_NOTE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_NOTE_SUCCESS: {
      return {
        ...state,
        loading: false,
        notes: payload,
      };
    }
    case GET_NOTE_FAILED: {
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
