import styled from "styled-components";
import { whiteDivWithBorder } from "../app/styled";

export const Items = styled.div`
  margin: 0;
  padding: 2rem;
`;

export const Item = styled(whiteDivWithBorder)`
  width: 180px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 2rem auto;
  box-shadow: 0 1px 10px #909090;

  :hover {
    transform: scale(1.2);
    transition: transform 1s ease-out;
  }
`;

export const ItemName = styled.p`
  color: #123459;
  padding-bottom: 7px;
  margin-top: auto;
  margin-bottom: 0;
  text-align: center;
`;
