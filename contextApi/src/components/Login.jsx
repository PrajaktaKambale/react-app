import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); //take reference ofsetUser from Profie.js file as we are usin contaxt api

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      {"    "}
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
