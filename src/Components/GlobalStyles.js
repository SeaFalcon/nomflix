import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset}
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing:border-box;
  }
  body{
    font-family: Roboto;
    font-size:18px;
    background:rgba(20,20,20,1);
    color:white;
    padding-top: 80px;
    padding-left: 20px;    
  }
`;

export default globalStyles;
