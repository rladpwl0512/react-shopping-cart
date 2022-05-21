import styled from 'styled-components';

const InputStyled = styled.input(
  ({ theme }) => `
  display: none;

  :checked + label {
    background-color: ${theme.mainColor};
  }
`,
);

const LabelStyled = styled.label(
  ({ theme }) => `
  position: relative;
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 1px solid ${theme.mainColor};
  border-radius: 2px;
  cursor: pointer;
  color: white;

  div {
    width: 15px;
    height: 10px;
    transform: rotate(-45deg);
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    margin: 5px auto;
  }
  `,
);

export { InputStyled, LabelStyled };