import styled from "styled-components";
import { DivWithBorder, backgroundMainColor, boxShadowMain } from "../app/styled";

export const Product = styled(DivWithBorder)`
  background-color: ${backgroundMainColor};
  margin: 0 auto;
  max-width: 1200px;
  box-shadow: ${boxShadowMain};
  
  /* lg-размер (<=1199px) */
  @media (max-width: 1199px) {
    width: 700px;
  }
  
  /* md-размер (<=991px) */
  @media (max-width: 991px) {
    width: 600px;
  }
  
  /* sm-размер (<=768px) */
  @media (max-width: 767px) { 
    width: 450px;
  }
  
  /* xs-размер (<=575px) */
  @media (max-width: 575px) {
    width: 280px;
  }
`;

export const ProductTextContainer = styled.div`
  max-width: 25rem;
  text-align: justify;
  margin: auto;
  padding: 1rem;
`;

export const ProductName = styled.h2`

`;

export const ProductInfo = styled.p`
  font-size: larger;
  text-align: justify;
`;

export const ProductImg = styled.div`
  margin: 0 0 0 auto;
  text-align: right;
  width: 100%;
  cursor: pointer;
`;
