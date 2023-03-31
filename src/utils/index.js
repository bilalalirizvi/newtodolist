export const letterCase = (str) => {
  return str !== ""
    ? str
        ?.split(" ")
        ?.map((v) => v?.charAt(0)?.toUpperCase() + v?.slice(1)?.toLowerCase())
        .join(" ")
    : str;
};

export const sortDataByDate = (array) => {
  return array.sort(function (a, b) {
    return new Date(b.createdBy) - new Date(a.createdBy);
  });
};
