import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
      details.username === adminUser.username &&
      details.password === adminUser.password
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

  // //styled components for login
  // const Heading = styled.h1`
  // font-size: 1em;
  // color: black;
  // text-align: center;
  // margin: 3rem 0 2rem 0;
  // `;
// const MainContainer = styled.div`
// diplay: block;
// align-items: center;
// flex-direction: column;
// height: 45vh;
// width: 20vw;
// background: rgba(255, 255, 255, 0.15  );
// box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
// backdrop-filter: blur(8.5px);
// border-radius: 10px;
// color:#ffffff;
// text-transform: uppercase;
// letter-spacing: 0.2rem;

// `;
// const InputButton= styled.button`
// background: linear-gradient(to right, #14163c 0% #03217b 79%);
// width: 65%;
// height: 3rem;
// border: none;
// color: black;
// border-radius: 20px;
// margin-left: 45px
// `;
// const ForgotPass = styled.a`
// margin-left: 50px;
// margin-top: 10px;
// `

  



  return (
    
    <form onSubmit={submitHandler}>
      {/* <MainContainer> */}
      <div className="loginCard">
      
      <h1>Welcome</h1>
     
      {error !== "" ? <div className="error">{error}</div> : ""}
      
      <div className="form-group">
        
       
        <input
          type="text"
          name="name"
          id="namebox"
          placeholder="Name"
          className="inputLogin"
          required
          onChange={(e) =>
            setDetails({ ...details, username: e.target.value })
          }
          value={details.username}
        />
      </div>
      <div className="form-group">
        
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="inputLogin"
          required
          
          onChange={(e) =>
            setDetails({ ...details, password: e.target.value })
          }
          value={details.password}
        />
      </div>
      

     
        <button>
        Login
        </button> 

      <p></p>
      <div><a href="" className="fgtPass">
        Forgot Password?
      </a></div>
      
          
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
