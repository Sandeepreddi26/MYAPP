import React, { useEffect, useState } from "react";
// import { useContext } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import 'C:/Users/sande/Desktop/React2/myapp/src/styles/profile.css'
// import { MemberIdContext } from './MemberIdContext';

const Profile = (props) => {
  // const { mId, setMId } = useState(0);
  const [profileData, setProfileData] = useState(null);
  // const { memberId ,setMemberId } = useContext(MemberIdContext);
const memberId=props.memberId
console.log(memberId)
  useEffect(() => {
    axios
      .get(`http://localhost:8080/Member/${memberId}`, {
        // withCredentials: true,
      })
      .then((response) => {
        setProfileData(response.data);
        console.log(response.data.firstName)
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, [memberId]); // Add email to dependency array to re-fetch data when email changes

  return (
    <div>
      <Header />
      <h1 style={{textAlign:"center"}}>Profile</h1>
      {profileData && (
        <div className="profile-container">
          <p>
            Name: {profileData.firstName} {profileData.lastName}
          </p>
          <p>Email: {profileData.email}</p>
          <p>DOB: {profileData.dob}</p>
          <p>phno: {profileData.phno}</p>
          <p>Address : {profileData.hno} {profileData.street} {profileData.village} {profileData.city} {profileData.state} {profileData.pincode}</p>
          {/* Add more profile details here */}
        </div>
      )}
    </div>
  );
};

export default Profile;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Header from "./Header";


// const Profile = () => {
//   const { memberId } = useParams(); // Use memberId instead of email
//   const [profileData, setProfileData] = useState(null);
//   const { memberId } = useContext(MemberIdContext);
//   useEffect(() => {
//     // Fetch profile data from backend using the memberId parameter
//     axios
//       .get(`http://localhost:8080/Member/${memberId}`, {
//         withCredentials: true,
//       })
//       .then((response) => {
//         setProfileData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching profile data:", error);
//       });
//   }, [memberId]); // Add memberId to dependency array to re-fetch data when memberId changes

//   return (
//     <div>
//       <Header />
//       <h1>Profile</h1>
//       {profileData && (
//         <div>
//           <p>
//             Name: {profileData.firstName} {profileData.lastName}
//           </p>
//           <p>Email: {profileData.email}</p>
//           {/* Add more profile details here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
