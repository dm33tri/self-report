import React from 'react';
import Markdown from 'react-markdown';
import Audio from './audio';
import sendMessage from '../../actions/sendMessage';
import { useSelector } from 'react-redux';

export default function ChatMessage({ message }) {
    const senderName = message.sender.user.username;
    const userId = useSelector((state) => state.userId);
    const out = userId === message.sender.user.id;

    return (
        <>
            <div className={out ? 'out' : ''}>
                <div className="bubble">
                    <div className="userName">{senderName}</div>
                    {message.media && message.media.length > 0 && <Audio src={`/${message.media}`} />}
                    {message.text && <Markdown source={message.text} />}
                </div>
                <div className="buttons">
                    {message.buttons && message.buttons.map((button, index) => {
                        return <button className="button" key={index} onClick={() => sendMessage({ text: button })}>{button}</button>
                    })}
                </div>
            </div>

            <style jsx>{`
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                .userName {
                    margin: 10px 0 0 0;
                    font-weight: bold;
                }

                .bubble {
                    min-width: 250px;
                    max-width: 600px;
                    background: #eee;
                    border-radius: 30px;
                    padding: 0 20px;
                    margin-top: 10px;
                    display: block;
                    line-height: 20px;
                }

                .buttons {
                    display: flex;
                    flex-direction: row;
                    max-width: 600px;
                    flex-wrap: wrap;
                }

                .button {
                    background: #fff;
                    border-radius: 30px;
                    padding: 7px 15px;
                    border: 1px solid #ccc;
                    outline: none;
                    display: inline;
                    margin: 5px 5px 0 0;
                    transition: background 0.1s ease-in-out;
                }

                .button:active {
                    background: #eee;
                    transition: background 0.1s ease-in-out;
                }

                .out {
                    align-items: flex-end;
                }

                .out .bubble { 
                    background: #eef;
                }
            `}</style>
        </>
    );
}