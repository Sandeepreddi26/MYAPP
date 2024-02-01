import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

const Points = (props) => {
    const [points, setPoints] = useState(null);
    const [loading, setLoading] = useState(true);
    const [travelInfo, setTravelInfo] = useState({
        ticketId:"",
        memberId:"",
        destId:"",
        date:"",
        personTravelling:"",
        totalMembers:""
    });

    // Declare ticketId variable
    const ticketId = props.ticketId;

    useEffect(() => {
        const fetchPoints = async () => {
            try {
                setLoading(true);
                // Fetch points data for the logged-in member
                const response = await axios.get(`http://localhost:8080/Points/${ticketId}`);
                setPoints(response.data);
                const response1 = await axios.get(`http://localhost:8080/TravelInfo/${ticketId}`);
                setTravelInfo(response1.data);
                console.log(response1.data);
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
    }, [ticketId]); // Fetch points data when ticketId changes

    return (
        <div>
            <Header />
            <div className="member-container">
                <div className="points-container">
                    {loading ? (
                        <p className="loading-text">Loading points data...</p>
                    ) : points ? (
                        <div className="member-details-container">
                            <p>Claimed Points: {points.points}</p>
                        </div>
                    ) : (
                        <p className="error-text">No points data available.</p>
                    )}
                </div>
            </div>
            <div className='filter'>
                <h3 style={{ textAlign: "center" }}>TravelInfo Details</h3>
                <br></br>
                <table className='transaction-table'>
                    <thead>
                        <tr>
                            {/* Use Object.keys() to get the field names from the transaction object */}
                            {Object.keys(travelInfo).map((field) => (
                                <th key={field}>{field}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* Use Object.values() to get the values of each field in the transaction object */}
                            {Object.values(travelInfo).map((value, index) => (
                                <td key={index}>{typeof value === 'boolean' ? value.toString() : value}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Points;
