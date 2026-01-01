import {type FC} from 'react';
//image
import iconChat from '../assets/chat.png'
//shared
import CircleIconButton from "@shared/ui/CircleIconButton/CircleIconButton.tsx";

const ChatButton: FC = () => {
    return (
        <CircleIconButton onClick={() => 1}>
            <img
                src={iconChat}
                alt="chat-icon"
            />
        </CircleIconButton>
    );
};

export default ChatButton;