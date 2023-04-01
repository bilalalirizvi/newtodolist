import moment from "moment";
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
  IS_COMPLETED_REQUEST,
  IS_COMPLETED_SUCCESS,
  IS_COMPLETED_FAILED,
  EDIT_TODO_REQUEST,
  EDIT_TODO_CANCEL,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,
} from "../actions/todo";

const initialState = {
  loading: false,
  todos: [],
  today: [],
  week: [],
  projects: [],
  editTodo: {},
  isEditTodo: false,
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
    // Get Todo
    case GET_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_TODO_SUCCESS: {
      const todayTodo = payload?.filter(
        (v) =>
          moment(v.date).format("DD") ===
          moment(new Date().toISOString()).format("DD")
      );
      var start = moment().clone().startOf("isoWeek");
      var end = moment().clone().endOf("isoWeek");
      const weekTodo = payload?.filter(
        (v) => moment(v.date) > start && moment(v.date) < end
      );
      return {
        ...state,
        todos: payload,
        loading: false,
        today: todayTodo,
        week: weekTodo,
      };
    }
    case GET_TODO_FAILED: {
      return {
        ...state,
        loading: false,
        todos: [],
      };
    }
    //Edit Todo
    case EDIT_TODO_REQUEST: {
      return {
        ...state,
        editTodo: payload,
        isEditTodo: true,
      };
    }
    case EDIT_TODO_CANCEL: {
      return {
        ...state,
        editTodo: {},
        isEditTodo: false,
      };
    }
    // Update Todo
    case UPDATE_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        editTodo: {},
        isEditTodo: false,
      };
    }
    case UPDATE_TODO_FAILED: {
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
    // Update Priority
    case IS_COMPLETED_REQUEST: {
      const index = state?.todos.findIndex((v) => v.docId === payload.docId);
      const temp = [...state.todos];
      temp[index].isCompleted = !temp[index].isCompleted;
      return {
        ...state,
        todos: temp,
      };
    }
    case IS_COMPLETED_SUCCESS: {
      return {
        ...state,
      };
    }
    case IS_COMPLETED_FAILED: {
      const index = state.todos.findIndex((v) => v.docId === payload.docId);
      const temp = [...state.todos];
      temp[index].isCompleted = !temp[index].isCompleted;
      return {
        ...state,
        todos: temp,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
