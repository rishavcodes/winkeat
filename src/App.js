import './App.css';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Pages/Register';
import VendorLogin from './Pages/VendorLogin';
import CanteenHome from './Pages/CanteenHome';
import Orders from "../src/Pages/Orders";
import User from "../src/Pages/User"







function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vendorlogin" element={<VendorLogin />} />
        <Route path="/canteenhome" element={<CanteenHome />} />
        <Route path="/user" element={<User />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>

      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
