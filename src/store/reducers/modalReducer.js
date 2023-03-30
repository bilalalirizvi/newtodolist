import {
  PRIORITY_MODAL_CLOSE,
  PRIORITY_MODAL_OPEN,
  TODO_MODAL_CLOSE,
  TODO_MODAL_OPEN,
} from "../actions/modal";

const initialState = {
  todoModal: false,
  priorityModal: false,
  selectedPriority: {},
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
    default:
      return state;
  }
};

export default modalReducer;
