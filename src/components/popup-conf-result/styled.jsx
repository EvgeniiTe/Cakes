import styled from "styled-components";
import { PopupContainer } from "../popup-img/styled";
import { backgroundMainColor, boxShadowMain, boxMainProps } from "../app/styled";

export { TransparentContainer, CloseButtonContainer } from "../popup-img/styled";

export const PopupResContainer = styled(PopupContainer)`

`;

export const Message = styled.div`
  padding: 2rem;
  overflow-wrap: break-word;
  background-color: ${backgroundMainColor};
  box-shadow: ${boxShadowMain};
  border: ${boxMainProps}
`;
