// App Init
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Components
import Auth from './pages/Outlet/Auth';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import Content from './pages/Outlet/Content';
import LandingPage from './pages/LandingPage';
import DetailRecipe from './pages/Recipe/DetailRecipe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<Content />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detail" element={<DetailRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
