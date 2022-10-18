import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignIn from './pages/sign_in/signing.component';
import Collection from './components/collection/collection';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" index element={<Home />} />
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/shop/:category" element={<Collection />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
