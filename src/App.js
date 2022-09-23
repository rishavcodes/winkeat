import './App.css';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Pages/Register';
import VendorLogin from './Pages/VendorLogin';
// import Sidebar from './Components/Sidebar/Sidebar';







function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vendorlogin" element={<VendorLogin />} />
      </Routes>
    </Router>

      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
