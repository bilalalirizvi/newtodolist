export const CREATE_TODO_REQUEST = "CREATE_TODO_REQUEST";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_FAILED = "CREATE_TODO_FAILED";

export const GET_TODO_REQUEST = "GET_TODO_REQUEST";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILED = "GET_TODO_FAILED";

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";

export const EDIT_TODO_REQUEST = "EDIT_TODO_REQUEST";
export const EDIT_TODO_CANCEL = "EDIT_TODO_CANCEL";

export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILED = "UPDATE_TODO_FAILED";

export const UPDATE_PRIORITY_REQUEST = "UPDATE_PRIORITY_REQUEST";
export const UPDATE_PRIORITY_SUCCESS = "UPDATE_PRIORITY_SUCCESS";
export const UPDATE_PRIORITY_FAILED = "UPDATE_PRIORITY_FAILED";

export const IS_COMPLETED_REQUEST = "IS_COMPLETED_REQUEST";
export const IS_COMPLETED_SUCCESS = "IS_COMPLETED_SUCCESS";
export const IS_COMPLETED_FAILED = "IS_COMPLETED_FAILED";

// Create Todo
export const createTodo = (payload) => {
  return {
    type: CREATE_TODO_REQUEST,
    payload: payload,
  };
};

// Get Todos
export const getTodos = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};

// Edit Todo
export const editTodo = (payload) => {
  return {
    type: EDIT_TODO_REQUEST,
    payload: payload,
  };
};

// Cancel Edit
export const cancelEditTodo = () => {
  return {
    type: EDIT_TODO_CANCEL,
  };
};

// Update Todo
export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO_REQUEST,
    payload: payload,
  };
};

// Delete Todo
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO_REQUEST,
    payload: payload,
  };
};

// Update Priority Status
export const updatePriority = (payload) => {
  return {
    type: UPDATE_PRIORITY_REQUEST,
    payload: payload,
  };
};

// Is Completed Todo
export const isCompletedTodo = (payload) => {
  return {
    type: IS_COMPLETED_REQUEST,
    payload: payload,
  };
};
