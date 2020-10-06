import styled, { keyframes } from "styled-components";

export const TransparentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);  
  z-index: 1100;
  display: ${({ display }) => (display === "enable" ? "block" : "none")};
`;

const appearance = keyframes`
  from {
    opacity: 0;
    transform: translate(0%, 0%);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const PopupImgContainer = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  height: auto;
  animation-name: ${appearance};
  animation-duration: 1s;
`;

export const Image = styled.div`

`;
