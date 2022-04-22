import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CurrencyLogin() {
    const navigate = useNavigate();

  //below is for the loginForm
  const adminUser = {
    username: "root",
    password: "root",
  };

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.username == adminUser.username &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({
        username: details.username,
        email: details.email,
      }); 
      localStorage.setItem("user", JSON.stringify(user))

     navigate('/converter');
    } else {
      console.log("details are wrong");
      setError("details dont match");
    }
  };

  const Logout = () => {
    setUser({ username: "", password: "" });
  };

  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>Login</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="namebox"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input className="bg-red-500" type="submit" value="LOGIN" />

        <p></p>
        <a href="" className="text-xs ml-40 mt-2 font-normal">
          Forgot Password?
        </a>

        {/* <div className="afterLogin">
          {user.username == "" ? (
            <div className="welcome">
              <h2>
                Welcome, <span>{user.username}</span>
              </h2>
              <button onClick={Logout} className=" rounded bg-red-600">
                LOGOUT
              </button>
            </div>
          ) : (
            <CurrencyLogin Login={Login} error={error} />
          )}
        </div> */}
      </div>
    </form>
  );
}
export default CurrencyLogin;
