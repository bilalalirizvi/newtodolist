export const letterCase = (str) => {
  return str !== ""
    ? str
        ?.split(" ")
        ?.map((v) => v?.charAt(0)?.toUpperCase() + v?.slice(1)?.toLowerCase())
        .join(" ")
    : str;
};

export const firstLetterCapital = (str) => {
  return str !== "" && str.charAt(0).toUpperCase() + str.slice(1);
};

export const sortDataByDate = (array) => {
  return array.sort(function (a, b) {
    return new Date(b.createdBy) - new Date(a.createdBy);
  });
};
