export const info = () => {
  const userId = localStorage.getItem("userId");
  const updatedBy = new Date().toISOString();
  const createdBy = new Date().toISOString();
  return {
    userId,
    updatedBy,
    createdBy,
  };
};
