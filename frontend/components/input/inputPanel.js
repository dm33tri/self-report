import React, { useState } from 'react';
import RecordButton from './recordButton';
import RecordProgress from './recordProgress';
import { Voice, Send } from '../icons/icons';
import sendMessage from '../../actions/sendMessage';

export default function InputPanel() {
    const [text, setText] = useState('');
    const [record, setRecord] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const startRecording = () => setIsRecording(true);

    const stopRecording = (blob) => {
        setRecord(blob);
        setIsRecording(false);
    }

    const onSubmit = (event) => {
        sendMessage({ text, audio: record });
        setText('');
        setRecord(null);
        event.preventDefault();
    };
    
    return (
        <>
            <form className="container" onSubmit={onSubmit} >
                {record && <audio src={URL.createObjectURL(record)} controls /> ||
                isRecording && <RecordProgress /> ||
                <input 
                    name="text" 
                    className="input" 
                    type="text" 
                    value={text} 
                    onChange={(event) => setText(event.target.value)} 
                />}
                <RecordButton onStopRecording={stopRecording} onStartRecording={startRecording}><Voice size={20} /></RecordButton>
                <button type="submit"><Send size={16} /></button>
            </form>

            <style jsx>{`
                .container {
                    width: 100%;
                    height: 64px;
                    align-items: center;
                    justify-content: space-between;
                    display: flex;
                    position: sticky;
                    bottom: 0;
                    right: 0;
                    background: #fff;
                    box-shadow: 0 0 6px #ccc;
                }

                audio {
                    width: 100%;
                    height: 32px;
                    margin: 0 10px;
                    outline: none;
                }

                button {
                    color: #fff;
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
                    outline: none;
                    padding: 0 16px;
                    font-size: 18px;
                    background: #fff;
                    border: 1px solid #ccc;
                    transition: box-shadow 0.3s ease-in-out;
                    width: 100%;
                    margin-left: 10px;
                }

                .input:focus {
                    background: #fff;
                    box-shadow: 0 5px 5px #eee;
                    transition: box-shadow 0.3s ease-in-out;
                }
            `}</style>
        </>
    );
}