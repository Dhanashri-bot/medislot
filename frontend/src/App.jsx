import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointments from "./pages/Appointments";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route  path="/appointments" element={<Appointments />}/>
  
  

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;