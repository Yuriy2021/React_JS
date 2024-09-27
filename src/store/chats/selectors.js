import { compareById } from "../../helpers";
export const getChats = (state) => state.chats;
export const getChatList = (state) => getChats(state).chats;
export const getChatById = (chatId) => (state) => getChatList(state).filter(compareById(chatId));
export const hasChatById = (chatId) => (state) => getChatList(state).findIndex(compareById(chatId)) !== -1;