import styled from '@emotion/styled';



export const ContactsList = styled.ul`
margin-left: 0;
  margin-top: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  min-width: 280px;
`;

export const ContactRow = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
`;

export const ButtonOnDelete = styled.button`
  background-color: #f3f3f3;
  display: flex;
  max-height: 17px;
  align-content: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid lightgray;
  border-radius: 3px;
  font-size: 12px;
`;
