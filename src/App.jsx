import React from 'react'
import {
  SearchPage,
  Home,
  Login,
  ProductList,
  SinglePage,
} from "./components/pages";
import { Route, Routes } from 'react-router-dom';
import { SEARCHPAGE, LOGIN, PRODUCTLIST } from "./components/constants";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${SEARCHPAGE}`} element={<SearchPage />} />
        <Route path={`${LOGIN}`} element={<Login />} />
        <Route path={`${PRODUCTLIST}`} element={<ProductList />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </main>
  );
}

export default App