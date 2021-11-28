import React, { useContext, useEffect, } from 'react'
import BotMessage from './BotMessage'
import UserMessage from './UserMessage'
import styles from './Chat.module.css'
import { ChatContext } from '../../../context/ChatContext'
import useElectionHandler from '../../../hooks/useElectionHandler'
import useGetRecipes from '../../../hooks/useGetRecipes'
import useSendMessage from '../../../hooks/useSendMessage'


const Chat = () => {
  const { chatContainer } = styles
  const { messages, foodType, currentElection, sendMenuRequest } = useContext(ChatContext)
  useElectionHandler()
  useGetRecipes()
  useSendMessage()


  return (
    <div className={chatContainer}>
      {/*
            <h3>Food type</h3>
      {foodType}
      <h3>current election</h3>
      {JSON.stringify(currentElection)}
      <h3>Send request</h3>
      {!sendMenuRequest ? 'No vamos a enviar' : 'Enviando'}
      */}

      {messages?.map((_message, index) => {
        const { type, message } = _message
        const key = `${index}-${type}`
        return (
        type === 'BOT' ? 
        <BotMessage key={key}>
          {message}
        </BotMessage> : 
        <UserMessage key={key}>
          {message}
        </UserMessage>
        )})}
    </div>
  )
}

export default Chat
