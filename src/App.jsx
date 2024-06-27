import React from 'react'
import {
  Home,
  Login,
  ProductList,
  SinglePage,
  Navbar,
} from "./components/pages";
import { Route, Routes } from 'react-router-dom';
import { LOGIN, PRODUCTLIST } from "./components/constants";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${LOGIN}`} element={<Login />} />
        <Route path={`${PRODUCTLIST}`} element={<ProductList />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </main>
  );
}

export default App