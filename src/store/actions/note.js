export const CREATE_NOTE_REQUEST = "CREATE_NOTE_REQUEST";
export const CREATE_NOTE_SUCCESS = "CREATE_NOTE_SUCCESS";
export const CREATE_NOTE_FAILED = "CREATE_NOTE_FAILED";

export const GET_NOTE_REQUEST = "GET_NOTE_REQUEST";
export const GET_NOTE_SUCCESS = "GET_NOTE_SUCCESS";
export const GET_NOTE_FAILED = "GET_NOTE_FAILED";

export const EDIT_NOTE_REQUEST = "EDIT_NOTE_REQUEST";
export const EDIT_NOTE_CANCEL = "EDIT_NOTE_CANCEL";

export const UPDATE_NOTE_REQUEST = "UPDATE_NOTE_REQUEST";
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";
export const UPDATE_NOTE_FAILED = "UPDATE_NOTE_FAILED";

export const DELETE_NOTE_REQUEST = "DELETE_NOTE_REQUEST";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILED = "DELETE_NOTE_FAILED";

// Create
export const createNote = (payload) => {
  return {
    type: CREATE_NOTE_REQUEST,
    payload: payload,
  };
};

// Get
export const getNote = () => {
  return {
    type: GET_NOTE_REQUEST,
  };
};

// Edit
export const editNote = (payload) => {
  return {
    type: EDIT_NOTE_REQUEST,
    payload: payload,
  };
};

// Cancel
export const cancelEditNote = () => {
  return {
    type: EDIT_NOTE_CANCEL,
  };
};

// Delete
export const deleteNote = (payload) => {
  return {
    type: DELETE_NOTE_REQUEST,
    payload: payload,
  };
};

// Update
export const updateNote = (payload) => {
  return {
    type: UPDATE_NOTE_REQUEST,
    payload: payload,
  };
};
