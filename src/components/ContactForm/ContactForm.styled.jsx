import styled from '@emotion/styled';

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  min-width: 50px;
  max-width: 250px;
`;

export const Button = styled.button`
  background-color: white;
  display: flex;
  height: 30px;
  width: 100px;
  //align-content: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    background-color: lightgreen;
  }
`;
