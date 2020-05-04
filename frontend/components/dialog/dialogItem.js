import React from 'react';

export default function DialogItem({ item }) {
    return (
        <>
            <div className="item">
                <div className="title">
                    {item.name}
                </div>
                <div className="subTitle">
                    {item.description}
                </div>
                <div className="status">
                    
                </div>
            </div>
            <style jsx>{`
                .item {
                    display: block;
                    padding: 22px;
                    box-sizing: border-box;
                    width: 100%;
                    height: 80px;
                    background: #fff;
                }
                .title {
                    font-weight: bold;
                }
            `}</style>
        </>
    )
}