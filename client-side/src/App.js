import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Beranda from './pages/index';
import Notifikasi from './pages/notifikasi';
import Akun from './pages/akun';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" exact element={<Beranda />} />
          <Route path="/notifikasi" exact element={<Notifikasi />} />
          <Route path="/akun" exact element={<Akun />} />
      </Routes>
    </Router>
  );
}

export default App;
