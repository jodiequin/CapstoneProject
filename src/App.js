import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import CartPage from './components/CartPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
