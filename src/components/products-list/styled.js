import styled from "styled-components";
import { WhiteDivWithBorder, boxShadowMain } from "../app/styled";

export const Items = styled.div`
  margin: 0;
  padding: 2rem;
`;

export const Item = styled(WhiteDivWithBorder)`
  width: 180px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 2rem auto;
  box-shadow: ${boxShadowMain};

  :hover {
    transform: scale(1.2);
    transition: transform 1s ease-out;
  }
`;

export const ItemName = styled.p`
  padding-bottom: 7px;
  margin-top: auto;
  margin-bottom: 0;
  text-align: center;
`;
