// import logo from './logo.svg';
import './App.css';
// import Lay from './Component/Layout/Lay';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;

