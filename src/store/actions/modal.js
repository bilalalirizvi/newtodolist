export const TODO_MODAL_OPEN = "TODO_MODAL_OPEN";
export const TODO_MODAL_CLOSE = "TODO_MODAL_CLOSE";

export const PRIORITY_MODAL_OPEN = "PRIORITY_MODAL_OPEN";
export const PRIORITY_MODAL_CLOSE = "PRIORITY_MODAL_CLOSE";

export const DETAILS_MODAL_OPEN = "DETAILS_MODAL_OPEN";
export const DETAILS_MODAL_CLOSE = "DETAILS_MODAL_CLOSE";

export const PROJECT_DETAILS_MODAL_OPEN = "PROJECT_DETAILS_MODAL_OPEN";
export const PROJECT_DETAILS_MODAL_CLOSE = "PROJECT_DETAILS_MODAL_CLOSE";

export const UPDATE_ACTIVE_FORM = "UPDATE_ACTIVE_FORM";

export const todoModalOpen = () => {
  return {
    type: TODO_MODAL_OPEN,
  };
};

export const todoModalClose = () => {
  return {
    type: TODO_MODAL_CLOSE,
  };
};

export const priorityModalOpen = (payload) => {
  return {
    type: PRIORITY_MODAL_OPEN,
    payload: payload,
  };
};

export const priorityModalClose = () => {
  return {
    type: PRIORITY_MODAL_CLOSE,
  };
};

export const detailsModalOpen = (payload) => {
  return {
    type: DETAILS_MODAL_OPEN,
    payload: payload,
  };
};

export const detailsModalClose = () => {
  return {
    type: DETAILS_MODAL_CLOSE,
  };
};

export const projectDetailsModalOpen = (payload) => {
  return {
    type: PROJECT_DETAILS_MODAL_OPEN,
    payload: payload,
  };
};

export const projectDetailsModalClose = () => {
  return {
    type: PROJECT_DETAILS_MODAL_CLOSE,
  };
};

export const activeForm = (payload) => {
  return {
    type: UPDATE_ACTIVE_FORM,
    payload: payload,
  };
};
