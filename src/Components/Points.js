import Header from './Header'
import React, { useState, useEffect  } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';
import 'C:/Users/vinee/OneDrive/Desktop/MYAPP/src/styles/member.css';


const Points = (props) => {
    const [points, setPoints] = useState(null);
    const [loading, setLoading] = useState(true);
    const ticketId=props.ticketId
    console.log("****",ticketId)
    console.log(ticketId)
    useEffect(() => {
        const fetchPoints = async () => {
            try {
                setLoading(true);
                // Fetch points data for the logged-in member
                const response = await axios.get(`http://localhost:8080/Points/${ticketId}`);
                setPoints(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching points data:', error);
                setLoading(false);
            }
        };

        fetchPoints();

        // Clean-up function (optional)
        return () => {
            // Any clean-up code if needed
        };
    }, [ticketId]); // Fetch points data when memberId changes

    return (

        <div >
            <Header />
            {/* {prop} */}
            {/* {prop.memberId} */}
            {/* {console.log(prop)} */}
            <div className="member-container">
                <div className="points-container">
                    {loading ? (
                        <p className="loading-text">Loading points data...</p>
                    ) : points ? (
                        <div className="member-details-container">

                            {/* <p>Points ID: {points.pointsId}</p>
                    <p>Member ID: {points.member}</p>
                    <p>Ticket ID: {points.travelInfo}</p> */}
                            <p>Claimed Points: {points.points}</p>
                        </div>
                    ) : (
                        <p className="error-text">No points data available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Points;
