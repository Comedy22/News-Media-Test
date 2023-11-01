import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
