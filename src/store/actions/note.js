export const CREATE_NOTE_REQUEST = "CREATE_NOTE_REQUEST";
export const CREATE_NOTE_SUCCESS = "CREATE_NOTE_SUCCESS";
export const CREATE_NOTE_FAILED = "CREATE_NOTE_FAILED";

export const GET_NOTE_REQUEST = "GET_NOTE_REQUEST";
export const GET_NOTE_SUCCESS = "GET_NOTE_SUCCESS";
export const GET_NOTE_FAILED = "GET_NOTE_FAILED";

export const DELETE_NOTE_REQUEST = "DELETE_NOTE_REQUEST";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILED = "DELETE_NOTE_FAILED";

export const UPDATE_NOTE_REQUEST = "UPDATE_NOTE_REQUEST";
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";
export const UPDATE_NOTE_FAILED = "UPDATE_NOTE_FAILED";

// Create Note
export const createNote = (payload) => {
  return {
    type: CREATE_NOTE_REQUEST,
    payload: payload,
  };
};

// Create Note
export const getNote = () => {
  return {
    type: GET_NOTE_REQUEST,
  };
};

// Delete Note
export const deleteNote = (payload) => {
  return {
    type: DELETE_NOTE_REQUEST,
    payload: payload,
  };
};

// Update Note
export const updateNote = (payload) => {
  return {
    type: UPDATE_NOTE_REQUEST,
    payload: payload,
  };
};
