import './App.css';
import './index.css';
import React from 'react';
import Beranda from './pages/index';
import Notifikasi from './pages/notifikasi';
import Login from './components/login/login';
import SignUp from './components/login/signUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/beranda" exact element={<Beranda />} />
          <Route path="/notifikasi" exact element={<Notifikasi />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;