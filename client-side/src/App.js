import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from './pages/index';
import Notifikasi from './pages/notifikasi';
import Akun from './pages/akun';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/beranda" exact element={<Beranda/>} />
          <Route path="/notifikasi" exact element={<Notifikasi/>} />
          <Route path="/akun" exact element={<Akun/>} />
      </Routes>
    </Router>
  );
}

export default App;
