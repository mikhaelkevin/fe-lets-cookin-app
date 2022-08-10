// App Init
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Components
import Footer from './components/global/Footer';
import Layouts from './components/global/Layouts';
import Navbar from './components/global/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Layouts>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
        <Footer />
      </Layouts>
    </BrowserRouter>
  );
}

export default App;
