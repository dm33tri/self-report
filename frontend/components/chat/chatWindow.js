import React, { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import Message from './chatMessage';
import InputPanel from '../input/inputPanel';

import fetchMessages from '../../actions/fetchMessages';

export default function ChatWindow() {
    const messages = useSelector((state = {}) => state.messages);
    const audio = useRef(null);

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <>
            <div className="messagesWindow">
                {messages.map((message, index) => {
                    return <Message key={index} message={message} />
                })}
                <div className="inputPanel">
                    <InputPanel />
                </div>

            </div>
            <style jsx>{`
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
            `}</style>
        </>
    );
}