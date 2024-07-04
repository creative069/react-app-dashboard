import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import BulkScanRequest from "./pages/BulkScanRequest";
import MyRequest from "./pages/MyRequest";
import Reports from './pages/Reports';
import './App.css';




export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/BulkScanRequest" exact element={<BulkScanRequest />}></Route>
          <Route path="/MyRequest" exact element={<MyRequest />}></Route>
          <Route path="/Reports" exact element={<Reports />}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}
