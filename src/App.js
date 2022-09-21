import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignIn from './pages/signing/signing.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/shop" index element={<ShopPage />} />
        <Route path="/signin" index element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
