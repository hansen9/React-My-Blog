import { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "./Firebase/Auth";
import { auth } from "./Firebase/FireBase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async(e) => {
    e.preventDefault();
    doCreateUserWithEmailAndPassword(email, username, password)
  };
  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <label>username</label>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>email</label>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;
