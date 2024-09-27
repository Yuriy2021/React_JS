import { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { MessageInput } from "../../components/MessageInput";
import { MessageList } from "../../components/MessageList";
import { useDispatch, useSelector } from 'react-redux';
import { getChatMessagesById } from "../../store/messages/selectors";
import { createMessage } from "../../store/messages/actions";
import { hasChatById } from "../../store/chats/selectors";
import { withChatMessages } from "../../hocs/withChatMessages";




export const MessagesRender = ({
    messageList,
    hasChat,
    onSendMessage, }) => {
    if (!hasChat) {
        return <Redirect to="/chats" />;
    }
    return (
        <>
            <MessageList messageList={messageList} />
            <MessageInput onSend={onSendMessage} />
        </>
    );
};

export const Messages = withChatMessages(MessagesRender);
