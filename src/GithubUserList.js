import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [userList, setUserList] = useState(["antoniocodella", "gianmarcotoso"]);
  const [user, setUser] = useState("");

  function handleInputUser(e) {
    const newUser = e.target.value;
    setUser(newUser);
  }

  function handleAddUser() {
    setUserList(() => {
      return {
        userList: [...userList, user],
      };
    });
  }

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
            <GithubUser username={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
