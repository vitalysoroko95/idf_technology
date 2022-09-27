import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
