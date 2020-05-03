import React, { useEffect, useRef, useState } from 'react';
import voiceRecorder from '../../services/recordVoice';

export default function RecordButton() {
    const [loudness, setLoudness] = useState(0);
    const requestRef = useRef();

    const animate = () => {
        setLoudness(voiceRecorder.loudness[0] / 255 * 10);

        requestRef.current = requestAnimationFrame(animate);
    }

    const mouseDown = () => {
        voiceRecorder.startRecording().then(() => {
            requestRef.current = requestAnimationFrame(animate);
        });
    };

    const mouseUp = () => {
        setLoudness(0);

        voiceRecorder.stopRecording().then((url) => {
            cancelAnimationFrame(requestRef.current);
        });
    };

    return (
        <>
            <button 
                type="button" 
                className="recordButton" 
                onMouseDown={mouseDown} 
                onMouseUp={mouseUp}
                style={{
                    boxShadow: `0 0 0 ${loudness}px #b2ebf2`
                }}
            />

            <style jsx>{`
                .recordButton {
                    width: 32px;
                    height: 32px;
                    box-sizing: border-box;
                    background: #00bcd4;
                    border-radius: 100%;
                    border: 0;
                    outline: none;
                    margin-left: 10px;

                }

                .recordButton:active {
                    outline: none;
                }
            `}</style>
        </>
    )
}