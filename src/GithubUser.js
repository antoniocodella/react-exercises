import { useGiutubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error, onFetchGithubUser } = useGiutubUser(username);

  return (
    <div>
      <button onClick={onFetchGithubUser}>Fetch Github User</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
