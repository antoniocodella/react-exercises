import { useState } from "react";

export function useLoginForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }
  console.log(data);

  return {
    username: data.username,
    password: data.password,
    onLogin: handleInputChange,
  };
}
