import React from 'react'
import { useState } from "react";
import axios from "axios";
import Header from './Header';
import { useNavigate } from 'react-router-dom';


export default function TravelInfo({onSubmit}) {
  const [ticketId, setTicketId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [destId, setDestId] = useState("");
  const [date, setDate] = useState("");
  const [personTravelling, setPersonTravelling] = useState("");
  const [totalMembers, setTotalMembers] = useState("");
  const navigate = useNavigate();
  const ticketID=ticketId
  
  
  async function save(event) {
    event.preventDefault();
    try {
      await axios.put("http://localhost:8080/TravelInfo/update", {
        ticketId: ticketId,
        memberId: memberId,
        destId: destId,
        date: date,
        personTravelling: personTravelling,
        totalMembers: totalMembers,
      });
      alert("Travel Info Updated");
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
          
              <div className="form-group">
                <label>Member ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="memberId"
                  placeholder="Enter Member ID"
                  value={memberId}
                  onChange={(event) => {
                    setMemberId(parseInt(event.target.value)); // Assuming memberId is a state variable of type number
                  }}
                />
              </div>

            
              <div className="form-group">
                <label>Destination ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="destId"
                  placeholder="Enter Destination ID"
                  value={destId}
                  onChange={(event) => {
                    setDestId(parseInt(event.target.value)); // Assuming destId is a state variable of type number
                  }}
                />
              </div>
            


          
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  placeholder="Enter Date"
                  value={date}
                  onChange={(event) => {
                    setDate(event.target.value); // Assuming date is a state variable of type string
                  }}
                />
              </div>
            


            
              <div className="form-group">
                <label>Are you part of travel</label>
                <input
                  type="text"
                  className="form-control"
                  id="personTravelling"
                  placeholder="Enter Person Travelling"
                  value={personTravelling}
                  onChange={(event) => {
                    setPersonTravelling(event.target.value); // Assuming personTravelling is a state variable of type string
                  }}
                />
              </div>
            


            
              <div className="form-group">
                <label>Total Members</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalMembers"
                  placeholder="Enter Total Members"
                  value={totalMembers}
                  onChange={(event) => {
                    setTotalMembers(parseInt(event.target.value)); // Assuming totalMembers is a state variable of type number
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
