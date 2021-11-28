import React from 'react'
import styles from './Chat.module.css'

const BotMessage = ({children}) => {
  const { messageClass, botMessage } = styles
  return (
    <div className={`${messageClass} ${botMessage}`}>
      {children}
    </div>
  )
}

export default BotMessage
