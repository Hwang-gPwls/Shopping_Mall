import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainIMG from "../asset/images/main.png";
import { items } from "../public/data";
import Card from "../components/Card";
import axios from "axios";

type CardProps = { title: string; content: string; src: string };

const Main = () => {
  const [shoes, setShoes] = useState(items);

  return (
    <>
      <Header />
      <MainBG></MainBG>
      <div>
        {shoes.map(({ title, content, src }: CardProps, idx) => (
          <Card
            key={idx.toString()}
            title={title}
            content={content}
            src={src}
          />
        ))}
      </div>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((data) => {
              console.log(data);
              const copyShoes = [...shoes, ...data.data];
              setShoes(copyShoes);
            })
            .catch((error) => {
              console.log(error);
            });
        }}>
        버튼
      </button>
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
