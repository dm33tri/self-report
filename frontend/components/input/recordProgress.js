import React, { useRef, useEffect, useState } from 'react';

export default function RecordProgress() {
    let intWidth = 0;
    const [width, setWidth] = useState(intWidth);

    useEffect(() => {
        const interval = setInterval(() => setWidth(intWidth += 2), 100)
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <div className="container">
                <div className="fill" style={{ width }} />
            </div>

            <style jsx>{`
                .container {
                    height: 32px;
                    border-radius: 16px;
                    background: #fff;
                    border: 1px solid #ccc;
                    width: 100%;
                    margin-left: 10px;
                }

                .fill {
                    height: 100%;
                    width: 100px;
                    border-radius: 16px 0 0 16px;
                    background: #eef;
                }
            `}</style>
        </>
    )
}