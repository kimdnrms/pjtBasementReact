import styled from 'styled-components';

const TextButtonWrapperStyled = styled.div`
  position: relative;
  diplay: flex;
  justify-contetn: center;
  align-item: center;
  padding: 0 15px;
  text-align: center;
  cursor: pointer;

  border: 1px solid red;
  color: white;
  background-color: green;
  
  &:hover {
    border: 1px solid darkred;
    color: white;
    background-color: darkgreen;
  }
`;

export default TextButtonWrapperStyled;
