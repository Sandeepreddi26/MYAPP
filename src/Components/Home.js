import Header from './Header'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';
import 'C:/Users/sande/Desktop/React2/myapp/src/styles/member.css';
// import { MemberIdContext } from './MemberIdContext';



const Home = (props) => {
    // const { state } = useLocation();
    // const { prop } = state;
    const [points, setPoints] = useState(null);
    const [loading, setLoading] = useState(true);
    // const { memberId } = useContext(MemberIdContext);
    const memberId = props.memberId
    console.log(props.memberId)
    useEffect(() => {
        const fetchPoints = async () => {
            try {
                setLoading(true);
                // Fetch points data for the logged-in member
                const response = await axios.get(`http://localhost:8080/Member/${memberId}`);
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
    }, [memberId]); // Fetch points data when memberId changes


    const [transactions, setTransactions] = useState([]);
    const getTransactions = async () => {
        try {
            const response = await fetch(`http://localhost:8080/Points/list/${memberId}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify({ accountno: accno })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            setTransactions(data);
        } catch (error) {
            console.error("Error fetching transactions:", error);
            // setTransactions([{ transactionStatus: "Error fetching transactions" }]);
        }
    }
    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <div >
            <Header memberId={memberId} />
            {/* {prop} */}
            {/* {prop.memberId} */}
            {/* {console.log(prop)} */}
            <div className="member-container">
                {/* <div className="member-header">
                    <h1 id="ffp" style={{ textAlign: 'center' }}>
                        <br></br>
                        Frequent Flyer Program
                    </h1>
                    <h2>Points Details</h2>
                </div> */}
                <div className="points-container">
                    {loading ? (
                        <p className="loading-text">Loading points data...</p>
                    ) : points ? (
                        <div className="member-details-container">

                            {/* <p>Points ID: {points.pointsId}</p>
                    <p>Member ID: {points.member}</p>
                    <p>Ticket ID: {points.travelInfo}</p> */}
                            <p>Available Points : {points.points}</p>

                        </div>
                    ) : (
                        <p className="error-text">No points data available.</p>
                    )}
                </div>
            </div>


            


            <div className='filter'>
                <br></br>
                <h3 style={{ textAlign: "center" }}>Points Details</h3>
                <br></br>
                {console.log(transactions)}
                {/* <p>{transactions.map((transaction)=>console.log(transaction))}</p> */}
                <table className='transaction-table'>
                    <thead>
                        <tr>
                            {/* Use Object.keys() to get the field names from the first transaction object */}
                            {transactions.length > 0 &&
                            <>
                            <th >PointsId</th>
                            <th >Points</th>
                            <th >MemberId</th>
                            <th >TicketId</th>
                            </>
                            //     Object.keys(transactions[0]).map(
                            //         (field) => (
                            //             <th key={field}>{field}</th>
                            //         )
                            //         // (pointsId) => (
                            //         // <th key={pointsId}>pointsId</th>
                            //         // )
                            //         // (Points) => (
                            //         //     <th key={Points}>points</th>
                            //         // )
                            // )
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                {/* Use Object.values() to get the values of each field in the transaction object */}
                                {Object.values(transaction).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Home;
