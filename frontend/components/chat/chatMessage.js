import React from 'react';
import Markdown from 'react-markdown';
import Audio from './audio';

export default function ChatMessage({ message }) {
    return (
        <>
            <div className={message.out ? 'out' : ''}>
                <div className="bubble">
                    {message.media && <Audio src={`/${message.media}`} />}
                    {message.message && <Markdown source={message.message} />}
                </div>
                <div className="buttons">
                    {message.buttons && message.buttons.map((button, index) => {
                        return <button className="button" key={index}>{button.text}</button>
                    })}
                </div>
            </div>

            <style jsx>{`
                display: flex;
                flex-direction: column;
                align-items: flex-start;

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