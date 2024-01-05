import { Client } from "../api/apiClient";
import { APIUrls } from "../api/constants";
import OpenAI from "openai";
import ChatCompletionCreateParamsNonStreaming = OpenAI.ChatCompletionCreateParamsNonStreaming;

const axios = Client();

export const postChatMessageCompletion = async (
  chatGPTRequest: ChatCompletionCreateParamsNonStreaming,
) => {
  return axios.post(APIUrls.chatCompletion, { ...chatGPTRequest });
};
