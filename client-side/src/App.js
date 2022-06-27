import './App.css';
import './index.css';
import React from 'react';
import Navbar from './components/navbar';
import Beranda from './pages/index';
import Notifikasi from './pages/notifikasi';
import Login from './components/login/login';
import SignUp from './components/login/signUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoutes from './ProtectedRoutes';
// import { Stack } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          {/* <Route element={ProtectedRoutes}>
            <Navbar /> */}
            <Route path="/beranda" exact element={<Beranda />} />
            <Route path="/notifikasi" exact element={<Notifikasi />} />
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;