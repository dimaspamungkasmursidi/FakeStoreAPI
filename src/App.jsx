import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/organisme/Header/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Register from './pages/Register';

function App() {
  return (
    <>
    <Router>
    {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}  />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
