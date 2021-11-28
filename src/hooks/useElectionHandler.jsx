import { useContext, useEffect } from 'react'
import { ChatContext } from '../context/ChatContext'
import ElectionFunctions from '../ElectionFunction'

const useElectionHandler = () => {
  const context = useContext(ChatContext)
  const { currentElection } = useContext(ChatContext)
  //const { currentElection, setCurrentElection, setMessages, setFoodType, setOptions, setGetRecipes, foodType } = context

  useEffect(() => {
    if (ElectionFunctions[currentElection?.type]) {
      ElectionFunctions[currentElection.type](/*{
        setCurrentElection,
        setMessages,
        setFoodType,
        setOptions,
        setGetRecipes, 
        foodType
      }*/ context)
    }
  }, [currentElection])

  return ''
}

export default useElectionHandler
