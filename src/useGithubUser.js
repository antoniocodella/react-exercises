import useSWR from "swr";

export function useGiutubUser(username) {
  const { data, error } = useSWR(
    () => (username ? `https://api.github.com/users/${username}` : null),
    fetcher
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
