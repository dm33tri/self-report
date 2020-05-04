import React from 'react';
import { useSelector } from 'react-redux';
import Message from './chatMessage';
import InputPanel from '../input/inputPanel';

export default function ChatWindow() {
    const dialog = useSelector((state) => state.currentDialog);
    const messages = useSelector((state) => state.messages).filter((message) => dialog === undefined || message.dialog.id === dialog);

    return (
        <>
            <div className="messagesWindow">
                <div className="messages">
                    {messages.map((message, index) => {
                        return <Message key={index} message={message} />
                    })}
                </div>
                <InputPanel />
            </div>
            <style jsx>{`
                .messagesWindow {
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                }

                .messages {
                    padding: 10px;
                    min-height: calc(100% - 64px);
                    box-sizing: border-box;   
                }
            `}</style>
        </>
    );
}