export const info = () => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const docId = localStorage.getItem("docId");
  const updatedBy = new Date().toISOString();
  const createdBy = new Date().toISOString();
  return {
    userId,
    userName,
    email,
    docId,
    updatedBy,
    createdBy,
  };
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
