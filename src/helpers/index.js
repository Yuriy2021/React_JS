import { nanoid } from "nanoid";

export const compareById = (targetId) => (item) => item.id === targetId;
export const createChat = (name) => ({
    name,
    id: nanoid(),
})
export const createMessage = (author, text) => ({
    author,
    text,
    id: nanoid(),
})