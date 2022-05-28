import { Link, useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { NewGithubUser } from "./NewGithubUser";

export function ShowGithubUser() {
  const { username = "antoniocodella" } = useParams();
  return (
    <div>
      <NewGithubUser username={username} />
      <Link to="/users">Come back</Link>
    </div>
  );
}
