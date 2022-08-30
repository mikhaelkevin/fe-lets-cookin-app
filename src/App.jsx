// App Init
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Components
import Layouts from './components/global/Layouts';
import LandingPage from './pages/LandingPage';
import DetailRecipe from './pages/DetailRecipe';
import Login from './pages/Login';
import Auth from './pages/Outlet/Auth';
import Content from './pages/Outlet/Content';

function App() {
  return (
    <BrowserRouter>
      <Layouts>
        <Routes>
          <Route element={<Auth />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
        <Routes>
          <Route element={<Content />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/detail" element={<DetailRecipe />} />
          </Route>
        </Routes>
      </Layouts>
    </BrowserRouter>
  );
}

export default App;
