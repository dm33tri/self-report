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
                {isRecording && <RecordProgress /> ||
                record && <audio src={URL.createObjectURL(record)} controls /> ||
                <input 
                    autocomplete="off"
                    name="text" 
                    className="input" 
                    type="text" 
                    value={text} 
                    onChange={(event) => setText(event.target.value)} 
                />}
                <RecordButton onStopRecording={stopRecording} onStartRecording={startRecording}><Voice size={24} /></RecordButton>
                <button type="submit"><Send size={24} /></button>
            </form>

            <style jsx>{`
                .container {
                    width: 100%;
                    height: 64px;
                    align-items: center;
                    justify-content: space-between;
                    display: flex;
                    position: fixed;
                    box-sizing: border-box;
                    padding-left: 400px;
                    bottom: 0;
                    right: 0;
                    background: #fff;
                }

                audio {
                    width: 100%;
                    height: 40px;
                    margin: 0 10px;
                    outline: none;
                }

                button {
                    color: #fff;
                    width: 32px;
                    height: 32px;
                    border-radius: 100%;
                    border: 0;
                    background: #bbf;
                    margin: 10px;
                    outline: none;
                    align-items: center;
                    justify-content: center;
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