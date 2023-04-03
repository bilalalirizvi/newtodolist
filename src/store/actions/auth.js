export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const createUser = (payload) => {
  return {
    type: CREATE_USER_REQUEST,
    payload: payload,
  };
};

export const loginUser = (payload) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload: payload,
  };
};

export const logout = (payload) => {
  return {
    type: LOGOUT_REQUEST,
    payload: payload,
  };
};
