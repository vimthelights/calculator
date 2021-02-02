import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
  font-weight: 100;
  }

  h1 {
    font-weight: 500;
    font-size: 38px;
    letter-spacing: 1px;
  }

  h3 {
    letter-spacing: .5px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
  }

  h4 {
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
  }

  input {
    border-radius: 8px;
    border: 1px solid rgb(205, 209, 212);
    padding: 8px;
    font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;
    width: 100%;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
  }

  input:focus {
    border-color: rgb(0, 173, 187);
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px;
  }

  input[type=range] {
    width: 100%;
    height: 2px;
    appearance: none;
    outline: none;
    margin: 0px;
    padding: 0px;
    cursor: default;
    --webkitProgressPercent: 65%;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    outline: none;
    margin: 0px;
    padding: 0px;
    cursor: default;
    background: linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) var(--webkitProgressPercent), rgb(205, 209, 212) var(--webkitProgressPercent), rgb(205, 209, 212) 94%);
  }

  input.range:focus {
    outline: none;
    outline-offset: 0px;
    color: rgb(16, 16, 16);
    border-color: none;
    box-shadow: none;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 4px solid white;
    border-radius: 100px;
    width: 20px;
    height: 20px;
    background: rgb(0, 120, 130);
    cursor: pointer;
    margin: -10px;
    box-shadow:rgba(0, 0, 0, .1) 0px 0px 1px 1px;
  }

  select {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: menulist;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    cursor: default;
    margin: 0em;
    font: 400 13.3333px Arial;
    border-radius: 8px;
    border-width: 0;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
    border-image: initial;
  }

  .loan-type-select {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    cursor: pointer;
    appearance: none;
    font-size: 16px;
    line-height: 1.5;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
  }

  select:focus {
      border-color: rgb(0, 173, 187);
      box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px;
      outline: 0;
  }

  select:not(:-internal-list-box) {
    overflow: visible !important;
  }

  .bold {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: .5px;
    color: black;
  }
`;

export default GlobalStyles;
