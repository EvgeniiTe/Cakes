import styled from "styled-components";

export const Items = styled.div`
  margin: 0;
  padding: 2rem;
`;

export const Item = styled.div`
  width: 180px;
  height: 240px;
  border: 4px solid #dedede;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;

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
