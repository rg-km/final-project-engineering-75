import './App.css';
<<<<<<< HEAD
=======
import './index.css';
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696
import React from 'react';
import Navbar from './components/navbar';
import Beranda from './pages/index';
import Notifikasi from './pages/notifikasi';
<<<<<<< HEAD
import Akun_admin from './pages/Akun_admin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';
=======
import Akun from './pages/akun';
import Login from './components/login/login';
import SignUp from './components/login/signUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoutes from './ProtectedRoutes';
// import { Stack } from 'react-bootstrap';
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Stack gap={2}>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Beranda />} />
            <Route path="/notifikasi" exact element={<Notifikasi />} />
            <Route path="/akun" exact element={<Akun_admin />} />
        </Routes>
      </Stack>
    </Router>
  );
=======
      <div className="App">
        <h2>JOURNAL LINK</h2>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          {/* <Route element={ProtectedRoutes}> */}
            {/* <Navbar /> */}
            <Route path="/beranda" exact element={<Beranda />} />
            <Route path="/notifikasi" exact element={<Notifikasi />} />
            <Route path="/akun" exact element={<Akun />} />
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  )
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696
}

export default App;