import styled from "styled-components";




export const Btn = styled.button`
   background: ${props => props.primary ? "#2C2D5B" : "white"};
  color: ${props => props.primary ? "white" : "#2C2D5B"};

  padding: 1.15rem 2.25rem;
  border: 1px solid #2C2D5B;
  border-radius: 0.5rem;
  display: inline-grid;
  place-items: center;

  outline: none;

  font-weight: 800;
font-size: 14px;
line-height: 17px;
`;