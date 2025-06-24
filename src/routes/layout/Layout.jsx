import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ThreatVulnerabilitySection from '@/pages/Tvm';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ThreatVulnerabilitySection />
    </div>
  );
};

export default Layout;
