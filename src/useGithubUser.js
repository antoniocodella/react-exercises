import useSWR from "swr";

export function useGiutubUser(username) {
  const { data, error, mutate } = useSWR(() =>
    username ? `https://api.github.com/users/${username}` : null
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
