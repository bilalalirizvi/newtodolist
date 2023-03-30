import {
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILED,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILED,
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILED,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILED,
  GET_TODO_SUCCESS,
  GET_TODO_FAILED,
  UPDATE_PRIORITY_REQUEST,
  UPDATE_PRIORITY_SUCCESS,
  UPDATE_PRIORITY_FAILED,
  GET_TODO_REQUEST,
} from "../actions/todo";

const initialState = {
  loading: false,
  todos: [],
  projects: [],
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Create Todo
    case CREATE_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_TODO_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    // Create Project
    case CREATE_PROJECT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_PROJECT_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_PROJECT_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    // Create Note
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
    // Get Todo
    case GET_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: payload,
        loading: false,
      };
    }
    case GET_TODO_FAILED: {
      return {
        ...state,
        loading: false,
        todos: [],
      };
    }
    // Get Project
    case GET_PROJECT_SUCCESS: {
      return {
        ...state,
        projects: payload,
      };
    }
    case GET_PROJECT_FAILED: {
      return {
        ...state,
        projects: [],
      };
    }
    // Update Priority
    case UPDATE_PRIORITY_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_PRIORITY_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_PRIORITY_FAILED: {
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
