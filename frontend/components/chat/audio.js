import React, { useState, useMemo } from 'react';

export default function AudioComponent({ src }) {
    const [play, setPlay] = useState(false);
    const audio = useMemo(() => new Audio({ src }), []);
    const toggle = () => {
        if (!play) {
            audio.play();
            setPlay(true);
        } else {
            audio.pause();
            audio.currentTime = 0;
            setPlay(false);
        }
    };

    return (
        <>
            <button type="button" onClick={toggle}>{play ? '◼' : '\u00A0▶'}</button>
            <style jsx>{`
                button {
                    float: left;
                    margin: 10px 10px 10px 0;
                    width: 32px;
                    height: 32px;
                    font-size: 17px;
                    color: #fff;
                    padding-left: 5px;
                    padding-top: 3px;
                    background: #ccf;
                    border-radius: 100%;
                    border: none;
                    outline: none;
                }
            `}</style>
        </>
    )
}