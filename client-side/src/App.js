import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
//import Beranda from "./pages/index";
import Notifikasi from "./pages/notifikasi";
//import Akun from "./pages/akun";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Stack gap={2}>
        <Navbar />
        <Routes>
          <Route path="/notifikasi" exact element={<Notifikasi />} />
        </Routes>
      </Stack>
    </Router>
  );
}

export default App;
