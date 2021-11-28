import React from 'react'
import Chat from '../../common/component/Chat';
import Footer from '../../common/component/Footer';
import Header from '../../common/component/Header';
import styles from './ChatView.module.css'


const ChatView = () => {
  const { chatContainer } = styles
  return (
    <div className={chatContainer}>
      <div className="header">
        <Header />
      </div>
      <div>
        <Chat />
      </div>
      <Footer />
    </div>
  )
}

export default ChatView
