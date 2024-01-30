// import { useState } from "react";
// // import { useNavigate } from 'react-router-dom'; 
// import axios from "axios";
// import { Link } from "react-router-dom";
// import 'C:/Users/sande/Desktop/React2/myapp/src/styles/login.css';
// import React from 'react';
// // import { MemberIdContext } from "./MemberIdContext";


// function Login({onLogin}) {

//   const [email, setEmail] = useState("s@gmail.com");
//   const [pswd, setPassword] = useState("123@123");
//   // const navigate = useNavigate();
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // const { setMemberId } = useContext(MemberIdContext); // Access setter from context

//   async function login(event) {
//     event.preventDefault();
//     try {
//       await axios.post("http://localhost:8080/api/login", {
//         email: email,
//         pswd: pswd,
//       }).then((res) => {
//         console.log(res.data);
//         if (res.data.memberId) {
//           onLogin(res.data.memberId)
//           // setMemberId(res.data.memberId);
//           // localStorage.setItem('memberId',JSON.stringify(res.data.memberId))
//           // setIsLoggedIn(true);
//           // console.log("Member ID after setting:", res.data.memberId);
//           // navigate('/home',{state:  {prop : res.data.memberId }} );
//         }
//         else if (res.data === "Email not exits") {
//           alert("Email not exits");
//         }
//         else {
//           alert("Incorrect Email and Password not match");
//         }
//         if(email!==res.data.email) {
//           <p>Incorrect Email</p>
//           alert("Incorrect Email")
//         }
//       }, fail => {
//         console.error(fail); // Error!
//       });
//     }


//     catch (err) {
//       alert(err);
//     }

//   }

//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <h2>Login</h2>
//           <hr />
//         </div>

//         <div className="row">
//           <div className="col-sm-6">

//             <form>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input type="email" className="form-control" id="email" placeholder="Enter email"

//                   value={email}
//                   onChange={(event) => {
//                     setEmail(event.target.value);
//                   }}

//                 />

//               </div>

//               <div className="form-group">
//                 <label>password</label>
//                 <input type="password" className="form-control" id="password" placeholder="Enter password"

//                   value={pswd}
//                   onChange={(event) => {
//                     setPassword(event.target.value);
//                   }}

//                 />
//               </div>
//               <div className="form-group">
//                 <button type="submit" className="btn btn-primary" onClick={login} >Login</button>
//               </div>
//               <div className="form-group">
//                 <Link to="/register">Don't have an account? Sign up</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'C:/Users/sande/Desktop/React2/myapp/src/styles/login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email: email,
        pswd: password,
      });
      const data = response.data;
      if (data.memberId) {
        onLogin(data.memberId);
      } else if (data === "Email not exits") {
        setError("Email does not exist");
      } else {
        setError("Incorrect email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while logging in : Incorrect email or password");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Login</h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError(""); // Clear previous error message
                  }}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError(""); // Clear previous error message
                  }}
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={login}
                >
                  Login
                </button>
              </div>
              <div className="form-group">
                <Link to="/register">Don't have an account? Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
