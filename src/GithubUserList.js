import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [userList, setUserList] = useState(["gianmarcotoso"]);
  const [user, setUser] = useState("");

  function handleInputUser(e) {
    const newUser = e.target.value;
    setUser(newUser);
  }

  function handleAddUser() {
    setUserList(() => [...userList, user]);
  }
  console.log(userList);

  return (
    <div>
      <input
        name="username"
        type="text"
        value={user}
        onChange={handleInputUser}
      ></input>
      <button onClick={handleAddUser}>Add Github User</button>

      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            <Link to={`/users/${user}`}>{user}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
