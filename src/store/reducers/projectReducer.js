import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILED,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILED,
  EDIT_PROJECT_REQUEST,
  EDIT_PROJECT_CANCEL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILED,
} from "../actions/project";

const initialState = {
  loading: false,
  projects: [],
  editProject: {},
  isEditProject: false,
};

const projectReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Create
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
    // Get
    case GET_PROJECT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PROJECT_SUCCESS: {
      return {
        ...state,
        loading: false,
        projects: payload,
      };
    }
    case GET_PROJECT_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    //Edit
    case EDIT_PROJECT_REQUEST: {
      return {
        ...state,
        editProject: payload,
        isEditProject: true,
      };
    }
    case EDIT_PROJECT_CANCEL: {
      return {
        ...state,
        editProject: {},
        isEditProject: false,
      };
    }
    // Update
    case UPDATE_PROJECT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_PROJECT_SUCCESS: {
      return {
        ...state,
        loading: false,
        editProject: {},
        isEditProject: false,
      };
    }
    case UPDATE_PROJECT_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default projectReducer;
