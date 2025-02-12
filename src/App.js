import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from './components/Registration';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [isRegistered, setIsRegistered] = useState(false); // State to track if user is registered successfully
  const [tableData, setTableData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Registration setIsRegistered={setIsRegistered} setTableData={setTableData} />} 
        />
        
        <Route 
          path="/Home" 
          element={isRegistered ? <Home tableData={tableData}/> : <Navigate to="/" replace />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;