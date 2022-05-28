import { useGiutubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error, onRefreshData } = useGiutubUser(username);

  return (
    <div>
      <button onClick={onRefreshData}>Refresh data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
