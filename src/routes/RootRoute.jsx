import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/routes/layout/Layout';
import Landing from '@/pages/Landing';
import IntegrationPage from '@/pages/Integration';

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Landing />} />
        <Route path="/integration" element={<IntegrationPage/>}/>
      </Route>
    </Routes>
  );
};

export default RootRoute;
