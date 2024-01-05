import React from "react";
import {
  ButtonGrid,
  ChatBubble,
  ChatContainer,
  ChatError,
  ChatName,
  ScrollAdvice,
} from "./style";
import { Dialogue, useChatGPT } from "../../context/ChatGPTContext";
import { Title } from "../Configuration/style";
import { Grid } from "@mui/material";
import { StartButton } from "../../style";
import { Link } from "react-router-dom";

const ExampleChat = () => {
  const { response } = useChatGPT();
  return (
    <>
      <Title>Imaginary Chatroom</Title>
      <ChatContainer>
        {response?.dialogues && response.dialogues.length > 0 && (
          <ScrollAdvice>Scroll to see the rest of the chat</ScrollAdvice>
        )}
        {response?.dialogues && response.dialogues.length > 0 ? (
          response.dialogues.map((dialogue: Dialogue, index: number) => (
            <Grid
              item
              justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
              display="flex"
              key={`speech_bubble: ${index}`}
            >
              <ChatBubble isUser={index % 2 === 0}>
                <ChatName>{dialogue.speaker}:</ChatName> {dialogue.message}
              </ChatBubble>
            </Grid>
          ))
        ) : (
          <>
            <ChatError item xs={12}>
              Something went wrong no dialogue saved. Please try again!
            </ChatError>
            <ButtonGrid item xs={12}>
              <Link to="/configuration">
                <StartButton>Go to Configuration</StartButton>
              </Link>
            </ButtonGrid>
          </>
        )}
      </ChatContainer>
      {response?.dialogues && response.dialogues.length > 0 && (
        <ButtonGrid>
          <Link to="/configuration">
            <StartButton>Generate More Chats</StartButton>
          </Link>
        </ButtonGrid>
      )}
    </>
  );
};

export default ExampleChat;
