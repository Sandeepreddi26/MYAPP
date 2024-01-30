// import './App.css';
import { Route, Routes,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home';
import NoMatch from './Components/NoMatch';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import TravelInfo from './Components/TravelInfo';
import Points from './Components/Points';
import Destination from './Components/Destination';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [memberId, setmemberId] = useState("")
  const [ticketId, setticketId] = useState("")
  const navigate=useNavigate();

  const handleSubmit=(ticketId)=>{
    console.log(ticketId+"claimpoints")
    setticketId(ticketId);
    navigate("/points")
  }
  
  const handleLogin = (memberId) => {
    console.log(memberId+"app")
    setmemberId(memberId);
    setLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className="App">
      <header className="App-header">

      </header>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin}></Login>} />        
          <Route path="/home" element={<Home memberId={memberId}/>}/>
          <Route path='/register' element={<Register />} />
          <Route path="/profile" element={<Profile memberId={memberId}/>} />
          <Route path='/travelInfo' element={<TravelInfo onSubmit={handleSubmit}/>} />
          <Route path='/points' element={<Points ticketId={ticketId}/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path="*" element={<NoMatch />} />
        </Routes>
    </div>
  );
}
export default App;
