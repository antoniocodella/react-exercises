import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGiutubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
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
