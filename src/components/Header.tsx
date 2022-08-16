import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Hamburger } from "../asset/icons/bars-solid.svg";
import { media } from "../styles/theme";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigation = useNavigate();

  return (
    <Navigation>
      <a href="/" className="brand-name">
        Shopping
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <Hamburger />
      </button>
      <Menues className={isNavExpanded ? "expanded" : "navigation-menu"}>
        <ul className="menu-list">
          <li className="menu-list__menu">
            <a href="/home" className="menu-list__menu__url">
              Home
            </a>
          </li>
          <li className="menu-list__menu">
            <a href="/about" className="menu-list__menu__url">
              Shop
            </a>
          </li>
          <li className="menu-list__menu">
            <a
              className="menu-list__menu__url"
              onClick={() => {
                navigation("/detail");
              }}>
              Detail
            </a>
          </li>
        </ul>
      </Menues>
    </Navigation>
  );
};

const Navigation = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);

  .brand-name {
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    margin-left: 1rem;
  }

  .hamburger {
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #283b8b;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;

    ${media.mobile} {
      display: block;
    }

    &:hover {
      background-color: #2642af;
    }
  }
`;

const Menues = styled.div`
  margin-left: auto;

  ${media.mobile} {
    display: none;

    &:expanded {
      display: block;
    }
  }

  .menu-list {
    display: flex;
    padding: 0;

    ${media.mobile} {
      position: absolute;
      top: 60px;
      left: 0;

      flex-direction: column;

      width: 100%;
      height: calc(100vh - 77px);
      background-color: white;
      border-top: 1px solid black;

      &__menu {
        text-align: center;
        margin: 0;

        &::hover {
          background-color: #eee;
        }

        &__url {
          color: black;
          width: 100%;
          padding: 1.5rem 0;
        }
      }
    }

    &__menu {
      list-style-type: none;
      margin: 0 1rem;

      &__url {
        text-decoration: none;
        display: block;
        width: 100%;
      }
    }
  }
`;

export default Header;
