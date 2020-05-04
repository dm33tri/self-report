import React, { useEffect } from 'react';

import Head from 'next/head'
import Header from '../components/header/header';
import ChatWindow from '../components/chat/chatWindow';
import DialogList from '../components/dialog/dialogList';

import fetchMessages from '../actions/fetchMessages';
import fetchDialogs from '../actions/fetchDialogs.js';

export default function Home() {
    useEffect(() => {
        fetchMessages();
        fetchDialogs();
    }, []);

    return (
        <>
            <Head>
                <title>Title</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page">
                <Header userName="dm33tri" />
                <div className="layout">
                    <DialogList />
                    <ChatWindow />
                </div>
            </div>


            <style jsx>{`
                .page {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .layout {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    flex-direction: row;
                }
            `}</style>
        </>
    )
}
