import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function Register() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phno, setPhno] = useState("");
  const [dob, setDOB] = useState("");
  const [hno, setHno] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [village, setVillage] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate=useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/Member/save", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phno: phno,
        dob: dob,
        hno: hno,
        street: street,
        village: village,
        city: city,
        state: state,
        pincode:pincode
      });
      alert("Registation Successful");
      navigate("/")

    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div class="container mt-4" >
        <div class="card">
          <h1>Member Registation</h1>

          <form>
            <div class="form-group">
              <label>First name</label>
              <input type="text" class="form-control" id="firstname" placeholder="Enter First Name"

                value={firstname}
                onChange={(event) => {
                  setFirstname(event.target.value);
                }}
              />

            </div>

            <div class="form-group">
              <label>Last name</label>
              <input type="text" class="form-control" id="lastname" placeholder="Enter last Name"

                value={lastname}
                onChange={(event) => {
                  setLastname(event.target.value);
                }}
              />

            </div>
            <div class="form-group">
              <label>email</label>
              <input type="email" class="form-control" id="email" placeholder="Enter Email"

                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}

              />

            </div>

            <div class="form-group">
              <label>password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter password"

                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}

              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"  // Use type="tel" for phone numbers
                className="form-control"
                id="phoneNumber"
                placeholder="Enter Phone Number"
                value={phno}
                onChange={(event) => {
                  setPhno(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                class="form-control"
                id="dob"
                placeholder="Select Date of Birth"
                value={dob}
                onChange={(event) => {
                  setDOB(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>House Number</label>
              <input
                type="text"
                className="form-control"
                id="hno"
                placeholder="Enter House Number"
                value={hno}
                onChange={(event) => {
                  setHno(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Street</label>
              <input
                type="text"
                className="form-control"
                id="street"
                placeholder="Enter Street"
                value={street}
                onChange={(event) => {
                  setStreet(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Village</label>
              <input
                type="text"
                className="form-control"
                id="village"
                placeholder="Enter Village"
                value={village}
                onChange={(event) => {
                  setVillage(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter City"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Enter State"
                value={state}
                onChange={(event) => {
                  setState(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Pincode</label>
              <input
                type="text"
                className="form-control"
                id="pincode"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(event) => {
                  setPincode(event.target.value);
                }}
              />
            </div>



            <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;