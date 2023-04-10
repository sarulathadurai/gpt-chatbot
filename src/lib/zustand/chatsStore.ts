import { create } from "zustand";
import { companyDetsType, geekChat } from "../apis/geekChat";

interface ChatState {
  chats: string[];
  isLoadingResponse: boolean;
  fetchAiResponse: (c: string, o: companyDetsType, key: string) => void;
}
export const useChatsStore = create<ChatState>()((set) => ({
  chats: ["Hi, how may I help you?"],
  isLoadingResponse: false,
  fetchAiResponse: async (chat, companyDetails, key) => {
    set((state) => ({
      chats: [...state.chats, chat],
      isLoadingResponse: true,
    }));
    const response = await geekChat(chat, companyDetails, key);
    const { choices } = await response.json();
    set((state) => ({
      chats: [...state.chats, choices[0].message.content],
      isLoadingResponse: false,
    }));
  },
}));
