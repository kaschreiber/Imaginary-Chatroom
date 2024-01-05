import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ConfigurationPage from "./pages/Configuration/ConfigurationPage";
import ChatPage from "./pages/Chat/ChatPage";
import { ChatGPTProvider } from "./context/ChatGPTContext";
import { ContentWrapper, PlaneReactWrapper } from "./style";

function PlaneReactApp() {
  return (
    <PlaneReactWrapper>
      <ChatGPTProvider>
        <ContentWrapper>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/configuration" element={<ConfigurationPage />} />
              <Route path="/chat" element={<ChatPage />} />
            </Routes>
          </Router>
        </ContentWrapper>
      </ChatGPTProvider>
    </PlaneReactWrapper>
  );
}

export default PlaneReactApp;
