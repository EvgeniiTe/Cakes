import styled from "styled-components";

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const SocialLink = styled.div`
  padding-left: 1rem;

  :hover {
    transform: scale(1.2);
    transition: transform 1s ease;
  }
`;
