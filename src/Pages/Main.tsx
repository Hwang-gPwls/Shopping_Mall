import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainIMG from "../asset/images/main.png";

const Main = () => {
  return (
    <>
      <Header />
      <MainBG></MainBG>
    </>
  );
};

const MainBG = styled.img.attrs({
  src: `${MainIMG}`,
})`
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
`;

export default Main;
