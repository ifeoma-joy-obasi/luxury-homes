import React from 'react'
import {SearchPage, Home , Login} from "./components/pages";
import { Route, Routes } from 'react-router-dom';
import { SEARCHPAGE, LOGIN, } from "./components/constants";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${SEARCHPAGE}`} element={<SearchPage />} />
        <Route path={`${LOGIN}`} element={<Login />} />
      </Routes>
    </main>
  );
}

export default App