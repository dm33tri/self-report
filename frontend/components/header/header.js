import React from 'react';

export default function Header({ userName }) {
    return <>
        <header className="header">
            <div className="title">
                SelfReport
            </div>
            <div className="userMenu">
                {userName}
            </div>
        </header>
        <style jsx>
            {`.header {
                width: 100%;
                height: 64px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: sticky;
                top: 0;
                left: 0;
                padding: 0 64px;
                box-sizing: border-box;
                background: #fff;
                box-shadow: 1px 0 6px #ccc;
                color: #000;
            }
            
            .title {
                font-size: 32px;
                font-weight: 800;
            }`}
        </style>
    </>
}