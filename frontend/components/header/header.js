import React from 'react';

import { Logo } from '../icons/icons';

export default function Header({ userName }) {
    return <>
        <header className="header">
            <div className="title">
                <Logo size={48} />SelfReport
            </div>
            <div className="userMenu">
                {userName}
            </div>
        </header>
        <style jsx>
            {`.header {
                font-family: sans-serif;
                width: 100%;
                height: 64px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 64px;
                box-sizing: border-box;
                background: #fff;
                box-shadow: 0 0 6px #ccc;
                color: #000;
                position: relative;
                z-index: 10;
            }
            
            .title {
                display: flex;
                align-items: center;
                font-size: 32px;
                font-weight: 300;
            }`}
        </style>
    </>
}