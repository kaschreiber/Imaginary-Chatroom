import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const ChatContainer = styled(Grid)`
  max-height: 60%;
  overflow: scroll;
`;

export const ChatBubble = styled.div<{ isUser: boolean }>`
  background-color: ${(props) =>
    props.isUser ? "rgba(177, 173, 234, 0.7)" : "rgba(219, 217, 244, 0.7)"};
  color: ${(props) =>
    props.isUser ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.7)"};
  padding: 22px 17px;
  border-radius: ${(props) =>
    props.isUser ? "15px 15px 0 15px" : "15px 15px 15px 0"};
  margin: 10px 0;
  max-width: 60%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  font-family: "Crimson Pro", serif;
  font-size: 1.3em;
`;

export const ChatName = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

export const ScrollAdvice = styled.div`
  font-family: "Crimson Pro", serif;
  font-size: 1.7em;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-style: italic;
  margin-bottom: 20px;
`;

export const ChatError = styled(Grid)`
  font-family: "Crimson Pro", serif;
  font-size: 1.7em;
  color: rgba(0, 0, 0, 0.6);
`;

export const ButtonGrid = styled(Grid)`
  margin-top: 40px;
  justify-content: center;
  display: flex;
  width: 100%;
`;
