import styled from "styled-components";
import { whiteDivWithBorder } from "../app/styled";

export const AbstractWithImage = styled(whiteDivWithBorder)`
 background-color: #f8f9fa;
 width: 50%;

   
 /* lg-размер (<=1199px) */
 @media (max-width: 1199px) {
    width: 70%;
 }
 
 /* md-размер (<=991px) */
 @media (max-width: 991px) {
    width: 70%;
 }
 
 /* sm-размер (<=768px) */
 @media (max-width: 767px) { 
    width: 80%;
 }
 
 /* xs-размер (<=575px) */
 @media (max-width: 575px) {
    width: 100%;
 }
`;
