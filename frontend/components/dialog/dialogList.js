import React from 'react';
import { useSelector } from 'react-redux';
import DialogItem from './dialogItem';

export default function DialogList() {
    const dialogs = useSelector((state = {}) => state.dialogs);

    return (
        <>
            <div className="wrapper">
                <div className="list">
                    {dialogs.map((dialog, index) => <DialogItem key={index} item={dialog} />)}
                </div>
            </div>
            <style jsx>{`
                .list {
                    width: 100%;
                    border-right: 1px solid #ccc;
                    background: #eee;
                    max-width: 400px;
                    position: sticky;
                    top: 0;
                }
                .wrapper {
                    display: block;
                    width: 100%;
                    border-right: 1px solid #ccc;
                    background: #eee;
                    max-width: 400px;
                }
            `}</style>
        </>
    )
}