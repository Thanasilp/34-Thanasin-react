import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const validateUser = () => {
      if (username === "" && usernameFocus) {
        setUserError("Username is required!");
      } else {
        setUserError("");
      }
    };

    const validatePassword = () => {
      if (password === "" && passwordFocus) {
        setPasswordError("Password is required!");
      } else {
        setPasswordError("");
      }
    };

    validateUser();
    validatePassword();
  }, [username, password, usernameFocus, passwordFocus]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setUserError("");
    setPasswordError("");

    if (!username) {
      setUserError("Username is required!");
      setUsernameFocus(true);
    }

    if (!password) {
      setPasswordError("Password is required!");
      setPasswordFocus(true);
    }

    if (
      !userError &&
      !passwordError &&
      username === "pepetester" &&
      password === "1234"
    ) {
      alert(`Log in successfully!, welcome back ${username}!`);
      navigate("dashboard");

      // Clear the form
      setUsername("");
      setPassword("");
    } else {
      alert("Incorrect username or password");
    }
  }

  return (
    <div>
      <div>
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
            />
            {userError && usernameFocus && (
              <p className="text-red-500 text-xs mt-1">{userError}</p>
            )}
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
            />
            {passwordError && passwordFocus && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>
          <button type="submit">log in</button>
        </form>
      </div>
    </div>
  );
};
