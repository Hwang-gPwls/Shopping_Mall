import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    black: "#222831",
    gray: "#393E46",
    white: "#EEEEEE",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  laptop: customMediaQuery(1440),
  tablet: customMediaQuery(800),
  mobile: customMediaQuery(420),
};
