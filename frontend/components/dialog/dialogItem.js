import React from 'react';
import switchDialog from '../../actions/switchDialog';

export default function DialogItem({ item }) {
    return (
        <>
            <div className="item" onClick={() => switchDialog(item.id)}>
                <div className="icon">👉</div>
                <div style={{ width: '100%' }}>
                    <div className="title">
                        {item.name}
                    </div>
                    <div className="subTitle">
                        {item.description}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .icon {
                    margin-right: 10px;
                }
                .item {
                    display: flexbox;
                    padding: 22px;
                    box-sizing: border-box;
                    width: 100%;
                    height: 80px;
                    background: #fff;
                    flex-direction: row;
                    align-items: center;
                    transition: background 0.1s ease-in-out;
                }
                .item:hover {
                    background: #eee;
                    transition: background 0.1s ease-in-out;
                }
                .title {
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-weight: bold;
                }
            `}</style>
        </>
    )
}