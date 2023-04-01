export const CREATE_PROJECT_REQUEST = "CREATE_PROJECT_REQUEST";
export const CREATE_PROJECT_SUCCESS = "CREATE_PROJECT_SUCCESS";
export const CREATE_PROJECT_FAILED = "CREATE_PROJECT_FAILED";

export const GET_PROJECT_REQUEST = "GET_PROJECT_REQUEST";
export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS";
export const GET_PROJECT_FAILED = "GET_PROJECT_FAILED";

export const EDIT_PROJECT_REQUEST = "EDIT_PROJECT_REQUEST";
export const EDIT_PROJECT_CANCEL = "EDIT_PROJECT_CANCEL";

export const UPDATE_PROJECT_REQUEST = "UPDATE_PROJECT_REQUEST";
export const UPDATE_PROJECT_SUCCESS = "UPDATE_PROJECT_SUCCESS";
export const UPDATE_PROJECT_FAILED = "UPDATE_PROJECT_FAILED";

export const DELETE_PROJECT_REQUEST = "DELETE_PROJECT_REQUEST";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
export const DELETE_PROJECT_FAILED = "DELETE_PROJECT_FAILED";

// Create
export const createProject = (payload) => {
  return {
    type: CREATE_PROJECT_REQUEST,
    payload: payload,
  };
};

// Get
export const getProjects = () => {
  return {
    type: GET_PROJECT_REQUEST,
  };
};

// Edit
export const editProject = (payload) => {
  return {
    type: EDIT_PROJECT_REQUEST,
    payload: payload,
  };
};

// Cancel
export const cancelEditProject = () => {
  return {
    type: EDIT_PROJECT_CANCEL,
  };
};

// Delete
export const deleteProject = (payload) => {
  return {
    type: DELETE_PROJECT_REQUEST,
    payload: payload,
  };
};

// Update
export const updateProject = (payload) => {
  return {
    type: UPDATE_PROJECT_REQUEST,
    payload: payload,
  };
};
