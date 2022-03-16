import styled from "styled-components";

export const header = styled.header`
  background-color: rgb(22 27 34);
  width: 100%;
  padding: 20px;
`;

export const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
font-family: sans-serif;
input {
    background-color: rgb(13 17 23); 
    border: 1px solid #30363d;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    color: #c9d1d9; 

  }
  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: white;
    }
  }
`;