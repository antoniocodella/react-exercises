import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error("User not found"));
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
