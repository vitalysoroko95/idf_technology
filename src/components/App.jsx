import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';
import { fetchSchema } from '../store/SchemaSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchema());
  }, []);

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
        <Route
          path='/signup-info'
          element={
            <Layout>
              <SignUpInfo />
            </Layout>
          }
        />
        <Route
          path='/signup-info/personal-info'
          element={
            <Layout>
              <PersonalInfo />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
