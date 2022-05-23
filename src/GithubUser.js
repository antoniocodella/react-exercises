import { useGiutubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error } = useGiutubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
