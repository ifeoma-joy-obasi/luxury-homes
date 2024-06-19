import React from 'react'
import {SearchPage, Home } from "./components/pages";
import Navbar from './components/ui/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { SEARCHPAGE } from './components/constants';

const App = () => {
  return (
    <main className="max-w-[95%] mx-auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${SEARCHPAGE}`} element={<SearchPage />} />
      </Routes>
    </main>
  );
}

export default App