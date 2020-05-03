import React from 'react';
import RecordButton from './recordButton';

export default function InputPanel() {
    return (
        <>
            <div>
                <input className="input" type="text" />
                <RecordButton />
                <button type="submit" />
            </div>

            <style jsx>{`
                width: 100%;
                height: 64px;
                align-items: center;
                justify-content: space-between;
                display: flex;

                button {
                    width: 32px;
                    height: 32px;
                    border-radius: 100%;
                    border: 0;
                    background: #dd2c00;
                    margin: 10px;
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