// App Init
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Components
import Footer from './components/global/Footer';
import Layouts from './components/global/Layouts';
import Navbar from './components/global/Navbar';
import LandingPage from './pages/LandingPage';
import DetailRecipe from './pages/DetailRecipe';

function App() {
  return (
    <BrowserRouter>
      <Layouts>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="detail" element={<DetailRecipe />} />
          </Route>
        </Routes>
        <Footer />
      </Layouts>
    </BrowserRouter>
  );
}

export default App;
