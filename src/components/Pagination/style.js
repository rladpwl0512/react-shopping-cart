import styled from 'styled-components';

const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }

  button:hover {
    background: #ddd;
    border-radius: 5px;
  }

  button.active {
    background: pink;
  }
`;

export default PaginationStyled;
