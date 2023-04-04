export const UPDATE_PICTURE_REQUEST = "UPDATE_PICTURE_REQUEST";
export const UPDATE_PICTURE_SUCCESS = "UPDATE_PICTURE_SUCCESS";
export const UPDATE_PICTURE_FAILED = "UPDATE_PICTURE_FAILED";
export const UPDATE_PICTURE_URL_REDUX = "UPDATE_PICTURE_URL_REDUX";

export const UPDATE_NAME_REQUEST = "UPDATE_NAME_REQUEST";
export const UPDATE_NAME_SUCCESS = "UPDATE_NAME_SUCCESS";
export const UPDATE_NAME_FAILED = "UPDATE_NAME_FAILED";
export const UPDATE_NAME_REDUX = "UPDATE_NAME_REDUX";

export const UPDATE_EMAIL_REQUEST = "UPDATE_EMAIL_REQUEST";
export const UPDATE_EMAIL_SUCCESS = "UPDATE_EMAIL_SUCCESS";
export const UPDATE_EMAIL_FAILED = "UPDATE_EMAIL_FAILED";
export const UPDATE_EMAIL_REDUX = "UPDATE_EMAIL_REDUX";

export const UPDATE_PASSWORD_REQUEST = "UPDATE_PASSWORD_REQUEST";
export const UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS";
export const UPDATE_PASSWORD_FAILED = "UPDATE_PASSWORD_FAILED";

export const updatePicture = (data) => {
  return {
    type: UPDATE_PICTURE_REQUEST,
    payload: data,
  };
};

export const updateDisplayName = (data) => {
  return {
    type: UPDATE_NAME_REQUEST,
    payload: data,
  };
};

export const updateEmail = (data) => {
  return {
    type: UPDATE_EMAIL_REQUEST,
    payload: data,
  };
};

export const updatePassword = (data) => {
  return {
    type: UPDATE_PASSWORD_REQUEST,
    payload: data,
  };
};
