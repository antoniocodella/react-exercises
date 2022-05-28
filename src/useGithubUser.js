import useSWR from "swr";

export function useGiutubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`
  );

  function handleFetchData() {
    mutate();
  }

  return {
    data,
    error,
    loading: !data && !error,
    onRefreshData: handleFetchData,
  };
}
