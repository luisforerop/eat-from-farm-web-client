import React from 'react'
import styles from './Chat.module.css'

const UserMessage = ({children}) => {
  const { messageClass, userMessage } = styles
  return (
    <div className={`${messageClass} ${userMessage}`}>
      {children}
    </div>
  )
}

export default UserMessage