import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGiutubUser(username) {
  const { data, error } = useSWR(
    () => (username ? `https://api.github.com/users/${username}` : null),
    fetcher
  );

  return { data, error, loading: !data && !error };
}
