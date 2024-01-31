import React from 'react'
import { useState } from "react";
import axios from "axios";
import Header from './Header';
import { useNavigate } from 'react-router-dom';


export default function TravelInfo({onSubmit}) {
  const [ticketId, setTicketId] = useState("");
  const navigate = useNavigate();
  const ticketID=ticketId
  
  
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/TravelInfo/validate/"+ticketID, {})
      if(Response.data==null){
        alert("Invalide data");
      }
      onSubmit(ticketID)
      console.log(ticketID)
      // navigate("/points",{state:{ticketId:ticketId}})
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div>
      <Header />
      <div className="container mt-4" >
        <div className="card">
          <h1>Claim Points for Travel</h1>

          <form>
              <div className="form-group">
                <label>Ticket ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="ticketId"
                  placeholder="Enter Ticket ID"
                  value={ticketId}
                  onChange={(event) => {
                    setTicketId(parseInt(event.target.value)); // Assuming ticketId is a state variable of type number
                  }}
                />
              </div>

            <button type="submit" className="btn btn-primary mt-4" onClick={save} >Save</button>

          </form>
        </div>
      </div>
    </div>
  )
}
