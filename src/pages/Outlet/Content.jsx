import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/global/Navbar';
import Footer from '../../components/global/Footer';
import Layouts from '../../components/global/Layouts';

function Content() {
  return (
    <Layouts>
      <Navbar />
      <Outlet />
      <Footer />
    </Layouts>
  );
}

export default Content;
