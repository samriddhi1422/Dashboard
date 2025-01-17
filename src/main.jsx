import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Layout from './Outlet.jsx';
import ReactDOM from 'react-dom'



import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Table from './pages/Table.jsx';
import Dashboard from './pages/Dashboard.jsx';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/table" element={<Table/>}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<Main />



);
