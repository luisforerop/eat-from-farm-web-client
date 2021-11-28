import React, { createContext, useState, } from 'react'


export const ChatContext = createContext();

/*
setMessages(currentMessages => currentMessages.concat({
          message: 'que más', 
          type: 'USER'
        },
        {
          message: 'hola', 
          type: 'BOT'
        },
        {
          message: 'Soy pepebot', 
          type: 'USER'
        }
      ))
*/

const ChatProvider = ({children}) => {
  const [ options, setOptions ] = useState([])
  const [ currentElection, setCurrentElection ] = useState({
    type: 'welcome'
  })
  const [ messages, setMessages ] = useState([])
  const [ foodType, setFoodType ] = useState('lunch')
  const [ getRecipes, setGetRecipes ] = useState(false)
  const [sendMenuRequest, setSendMenuRequest] = useState(false)
  const [ingredients, setIngredients] = useState([])

  const chatContext =  {
    messages,
    setMessages,
    options,
    setOptions,
    currentElection,
    setCurrentElection,
    foodType,
    setFoodType,
    getRecipes,
    setGetRecipes,
    sendMenuRequest, 
    setSendMenuRequest,
    ingredients, 
    setIngredients,
  }
  return (
    <ChatContext.Provider value={chatContext}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
