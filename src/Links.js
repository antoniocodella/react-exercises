import { Link } from "react-router-dom";

export function Links() {
  return (
    <div>
      <Link to="/">Home</Link>|<Link to="/counter">Counter</Link>|
      <Link to="/users/:username">Github User</Link>
    </div>
  );
}
