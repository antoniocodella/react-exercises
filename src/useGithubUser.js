import { useEffect, useState } from "react";

export function useGiutubUser(username) {
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
        console.log(json);

        setData(json);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [username]);

  return { data, loading, error };
}
