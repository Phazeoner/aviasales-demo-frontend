import styled from "styled-components";

const Button = styled.button`
  position: relative;
  line-height: 28px;
  font-famaly: font-family: 'Roboto', Helvetica Neue, Open Sans, sans-serif;
  font-size: 24px;
  color: #fff;
  border-radius: 3px;
  background: #ff9241;
  border: none;
  width: 100%;
  height: 56px;
  @media only screen and (min-width: 576px) {
    height: 56px;
  }
`;

export default Button;
