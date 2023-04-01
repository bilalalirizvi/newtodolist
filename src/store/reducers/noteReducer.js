import {
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILED,
  GET_NOTE_REQUEST,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILED,
  EDIT_NOTE_REQUEST,
  EDIT_NOTE_CANCEL,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILED,
} from "../actions/note";

const initialState = {
  loading: false,
  notes: [],
  editNote: {},
  isEditNote: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Create
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
    // Get
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
    //Edit
    case EDIT_NOTE_REQUEST: {
      return {
        ...state,
        editNote: payload,
        isEditNote: true,
      };
    }
    case EDIT_NOTE_CANCEL: {
      return {
        ...state,
        editNote: {},
        isEditNote: false,
      };
    }
    // Update
    case UPDATE_NOTE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_NOTE_SUCCESS: {
      return {
        ...state,
        loading: false,
        editNote: {},
        isEditNote: false,
      };
    }
    case UPDATE_NOTE_FAILED: {
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
