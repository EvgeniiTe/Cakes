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
  display: ${({ display }) => (display === true ? "block" : "none")};
`;

const appearance = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const PopupImgContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  animation-name: ${appearance};
  animation-duration: 1s;
  max-width: 700px;
    
  /* lg-размер (<=1199px) */
  @media (max-width: 1199px) {
    width: 550px;
  }
  
  /* md-размер (<=991px) */
  // @media (max-width: 991px) {
  //   width: 550px;
  // }

  /* sm-размер (<=768px) */
  @media (max-width: 767px) { 
    width: 400px;
  }
  
  /* xs-размер (<=575px) */
  @media (max-width: 575px) {
    width: 300px;
  }
`;

export const Image = styled.div`
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  overflow: hidden;
  width: 100%;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  left: 102%;
  top: 2%;
  z-index: 1101;
  padding: 1rem;
  width: 4rem;
  
  :hover {
    opacity: 0.7;    
  }

  /* sm-размер (<=768px) */
  @media (max-width: 767px) { 
    top: -20%;
    left: 80%;
  }
`;
