import React, { createContext, useContext, useState, ReactNode } from "react";

interface ChatGPTContextProps {
  response: DialoguesResponse | null;
  setResponse: React.Dispatch<React.SetStateAction<DialoguesResponse | null>>;
}

const ChatGPTContext = createContext<ChatGPTContextProps | undefined>(
  undefined,
);

interface ChatGPTProviderProps {
  children: ReactNode;
}

export interface Dialogue {
  speaker: string;
  message: string;
}

export interface DialoguesResponse {
  dialogues: Array<Dialogue>;
}

export const ChatGPTProvider: React.FC<ChatGPTProviderProps> = ({
  children,
}) => {
  const [response, setResponse] = useState<DialoguesResponse | null>(null);

  return (
    <ChatGPTContext.Provider value={{ response, setResponse }}>
      {children}
    </ChatGPTContext.Provider>
  );
};

export const useChatGPT = () => {
  const context = useContext(ChatGPTContext);

  if (!context) {
    throw new Error("useChatGPT must be used within a ChatGPTProvider");
  }

  return context;
};
