import styled, { createGlobalStyle } from "styled-components";
import BGImage from './images/ragnar.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center; 
    min-height: 100vh; 
    font-family: 'Poppins', sans-serif;
    color: #fff; 
  }

  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.7); 
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px; 
  margin: 20px; 

  > p {
    color: #f2f2f2; 
    font-size: 1rem;
    margin-top: 0;
  }

  .score {
    color: #fff;
    font-size: 2.5rem; 
    margin: 20px 0;
    font-weight: bold;
    text-shadow: 2px 2px #000; 
  }

  h1 {
    font-family: 'Fascinate Inline', Haettenschwieler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #fbc400); 
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: 400;
    filter: drop-shadow(2px 2px #d98e00); 
    font-size: 3.5rem; 
    text-align: center;
    margin: 20px 0;
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(to right, #007bff, #00bfff); 
    color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
    font-size: 1.2rem;
    margin: 10px 0;
    transition: background-color 0.3s ease;

    &:hover {
      background: linear-gradient(to right, #0056b3, #008ae6); 
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  .number {
    background: linear-gradient(to right, #4CAF50, #8BC34A); 
    color: #fff;
    padding: 8px 15px;
    border-radius: 5px;
    font-weight: bold;
    margin-bottom: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  }
`;