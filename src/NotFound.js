import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <p>Not found</p>
      <Link to="/">Home Page</Link>
    </div>
  );
}
