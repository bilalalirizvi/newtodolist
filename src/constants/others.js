export const info = () => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("name");
  const updatedBy = new Date().toISOString();
  const createdBy = new Date().toISOString();
  return {
    userId,
    userName,
    updatedBy,
    createdBy,
  };
};
