import React from 'react'
import { useState } from "react";
import axios from "axios";
import Header from './Header';
//import { useNavigate } from 'react-router-dom';


export default function TravelInfo({onSubmit}) {
  const [ticketId, setTicketId] = useState("");
  //const navigate = useNavigate();
  const ticketID=ticketId
  
  
  async function save(event) {
    event.preventDefault();
    try {
      console.log("**************************************************************");
      const response=await axios.post(`http://localhost:8080/TravelInfo/validate/${ticketID}`, {})  
        if(response.data===""){
          alert("Invalid TicketId")
          return;
        }
        else if(response.data.ticketId===0){
          alert("points already have been claimed on this ticket")
          onSubmit(ticketID);
        }
       else{ 
          alert("Hurrey")
          onSubmit(ticketID);
       }
      console.log("Ticket ID submitted:", ticketID);
    } catch (err) {
      console.error("Error:", err);
      alert("Error occurred while saving");
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
