import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PlaneReactWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const StartButton = styled.button`
  font-size: 1.5em;
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  cursor: pointer;
  font-family: "Cinzel", serif;
  font-weight: 600;
  min-width: 332px;
`;
