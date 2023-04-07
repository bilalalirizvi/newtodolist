const useSearch = ({ value, data }) => {
  let filterData =
    value !== ""
      ? data?.filter((v) =>
          v?.title?.toLowerCase().startsWith(value?.toLowerCase())
        )
      : data;
  return [filterData];
};

export default useSearch;
