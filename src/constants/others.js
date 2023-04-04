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
