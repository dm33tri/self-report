import React, { useState } from 'react';
import RecordButton from './recordButton';

import sendMessage from '../../actions/sendMessage';

export default function InputPanel() {
    const [text, setText] = useState('');
    const [record, setRecord] = useState(null);
    const stopRecording = (blob) => setRecord(blob);
    const onSubmit = (event) => {
        sendMessage({ text, audio: record });
        setText('');
        setRecord(null);
        event.preventDefault();
    };
    
    return (
        <>
            <div>
                <form onSubmit={onSubmit} >
                    {record 
                        ? <audio src={URL.createObjectURL(record)} controls /> 
                        : <input name="text" className="input" type="text"  value={text} onChange={(event) => setText(event.target.value)} />}
                    <RecordButton onStopRecording={stopRecording} />
                    <button type="submit" />
                </form>
                
            </div>

            <style jsx>{`
                width: 100%;
                height: 64px;
                align-items: center;
                justify-content: space-between;
                display: flex;

                audio {
                    height: 32px;
                    margin: 0 10px;
                    outline: none;
                }

                button {
                    width: 32px;
                    height: 32px;
                    border-radius: 100%;
                    border: 0;
                    background: #dd2c00;
                    margin: 10px;
                    outline: none;
                }

                .input {
                    height: 32px;
                    border-radius: 16px;
                    border: 1px solid #00bcd4;
                    outline: none;
                    padding: 0 16px;
                    font-size: 18px;
                }

            `}</style>
        </>
    );
}