import React from 'react';

export default function ChatMessage({ message }) {
    return (
        <>
            <div className={message.out ? 'out' : ''}>
                <div className={'bubble'}>
                    {message.media 
                        ? <audio controls src={`/${message.media}`} />
                        : message.message
                    }
                </div>
            </div>

            <style jsx>{`
                display: flex;
                flex-direction: column;

                .bubble {
                    min-width: 300px;
                    max-width: 600px;
                    background: #eee;
                    border-radius: 15px;
                    padding: 15px 20px;
                    margin-top: 10px;
                }

                .out {
                    align-items: flex-end;
                }
            `}</style>
        </>
    );
}