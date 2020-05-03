import Head from 'next/head'
import Header from '../components/header/header';
import ChatWindow from '../components/chat/chatWindow';
import ChatList from '../components/chat/chatList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header userName="dm33tri"/>
      <div className="layout">
        <ChatList />
        <ChatWindow />
      </div>
      <style jsx>{`
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
