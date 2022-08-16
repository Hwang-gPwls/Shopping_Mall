import React from "react";
import styled from "styled-components";

type CardProps = { title: string; content: string; src: string };

const Card = ({ title, content, src }: CardProps) => {
  return (
    <Container>
      <div>{title}</div>
      <div>{content}</div>
      <img src={src} />
    </Container>
  );
};

const Container = styled.div``;

export default Card;
