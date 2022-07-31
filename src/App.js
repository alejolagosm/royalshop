import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home/home.component';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
