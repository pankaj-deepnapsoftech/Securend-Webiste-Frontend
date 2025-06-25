import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/routes/layout/Layout';
import Landing from '@/pages/Landing';
import IntegrationPage from '@/pages/Integration';
import ThreatVulnerabilitySection from '@/pages/Tvm';
import RiskOperationsSection from '@/pages/Roc';

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Landing />} />
        <Route path='/integration' element={<IntegrationPage />} />
        <Route path='/tvm-page' element={<ThreatVulnerabilitySection />} />
        <Route path='/roc' element={<RiskOperationsSection />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
