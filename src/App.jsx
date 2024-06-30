import React from 'react'
import {
  Home,
  Login,
  ProductList,
  SinglePage,
  Navbar,
  NotFound,
  LandlordsLogin,
  GuestLogin,
  ForgotPassword,
} from "./components/pages";
import { Route, Routes } from 'react-router-dom';
import {
  LOGIN,
  PRODUCTLIST,
  LANDLORDSLOGINPAGE,
  FORGOTPASSWORD,
} from "./components/constants";

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${PRODUCTLIST}`} element={<ProductList />} />
        <Route path={`${PRODUCTLIST}/:productId`} element={<SinglePage />} />
        <Route path={`${LOGIN}`} element={<Login />}>
          <Route index element={<GuestLogin />} />
          <Route path={`${LANDLORDSLOGINPAGE}`} element={<LandlordsLogin />} />
        </Route>
        <Route
          path={`${LOGIN}/${FORGOTPASSWORD}`}
          element={<ForgotPassword />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App