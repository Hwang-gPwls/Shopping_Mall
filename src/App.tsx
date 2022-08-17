import React from "react";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>없는 페이지</div>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
