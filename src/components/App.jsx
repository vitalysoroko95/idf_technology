import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';
import { setData } from '../store/SchemaSlice';

const App = () => {
  const dispatch = useDispatch();
  const { validateSchema } = useSelector((store) => store.schema);

  const getData = async () => {
    await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        dispatch(setData(data));
      });
  };

  useEffect(() => {
    getData();
    console.log(validateSchema);
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
