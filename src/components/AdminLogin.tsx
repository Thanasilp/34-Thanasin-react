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
    <div className="m-8 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Admin Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setUsernameFocus(true)}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:outline-none"
            />
            {userError && usernameFocus && (
              <p className="text-red-500 text-xs mt-1">{userError}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:outline-none"
            />
            {passwordError && passwordFocus && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-lime-600 text-white font-semibold rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            log in
          </button>
        </form>
      </div>
    </div>
  );
};
