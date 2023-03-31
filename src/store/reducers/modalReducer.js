import {
  DETAILS_MODAL_CLOSE,
  DETAILS_MODAL_OPEN,
  PRIORITY_MODAL_CLOSE,
  PRIORITY_MODAL_OPEN,
  TODO_MODAL_CLOSE,
  TODO_MODAL_OPEN,
  UPDATE_ACTIVE_FORM,
} from "../actions/modal";

const initialState = {
  todoModal: false,
  priorityModal: false,
  detailsModal: false,
  selectedPriority: {},
  selectedDetails: {},
  activeForm: "todo",
};

const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TODO_MODAL_OPEN: {
      return {
        ...state,
        todoModal: true,
      };
    }
    case TODO_MODAL_CLOSE: {
      return {
        ...state,
        todoModal: false,
      };
    }
    case PRIORITY_MODAL_OPEN: {
      return {
        ...state,
        priorityModal: true,
        selectedPriority: payload,
      };
    }
    case PRIORITY_MODAL_CLOSE: {
      return {
        ...state,
        priorityModal: false,
        selectedPriority: {},
      };
    }
    case DETAILS_MODAL_OPEN: {
      return {
        ...state,
        detailsModal: true,
        selectedDetails: payload,
      };
    }
    case DETAILS_MODAL_CLOSE: {
      return {
        ...state,
        detailsModal: false,
        selectedDetails: {},
      };
    }
    case UPDATE_ACTIVE_FORM: {
      return {
        ...state,
        activeForm: payload,
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
