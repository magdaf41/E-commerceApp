import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBackdrop = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const StyledModalContent = styled.div`
  width: 700px;
  height: 150px;
  color: #dadacb;
  border: 1px solid #fff;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 105;
`;

export const StyledModalBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 20px;
  border: 1px solid white;
  color: red;
`;
