import React, { useEffect, useRef, useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }
  console.log(data);

  return (
    <form>
      <input
        ref={inputRef}
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={handleInputChange}
      />
      <button
        disabled={!data.username || !data.password}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button>Reset</button>
    </form>
  );
}
