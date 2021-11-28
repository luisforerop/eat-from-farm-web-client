import { useContext, useEffect } from 'react'
import { ChatContext } from '../context/ChatContext'

const ingredients = [
  'Papas',
  'Pollo', 
  'Cebolla',
]

const useGetRecipes = () => {
  const { setOptions, setMessages, foodType, getRecipes, setIngredients } = useContext(ChatContext)

  useEffect(() => {
    // Gestionamos con current option
    if (getRecipes) {
      setMessages(currentMessages => currentMessages.concat(
        [
          {
            message: 'Buscando recetas',
            type: 'BOT'
          },
          {
            message: 'Muchas gracias',
            type: 'USER'
          }
        ]
      ))
      setTimeout(() => {
        setMessages(currentMessages => currentMessages.concat(
          [
            {
              message: 'Puedo ofrecerte: ',
              type: 'BOT'
            },
            {
              message: 'Receta 1: Pollo al horno con papas a la francesa',
              type: 'BOT'
            },
            {
              message: 'Receta 2: Papas hervidas con queso',
              type: 'BOT'
            },
            {
              message: 'Receta 3: Guiso de lentejas con pure de papa',
              type: 'BOT'
            },
          ]
        ))

        setOptions([      
          {
            message: 'Receta 1',
            type: 'sendMessage',
            moreInfo: ingredients, 
          },
          {
            message: 'Receta 2',
            type: 'sendMessage',
            moreInfo: ingredients, 
          },
          {
            message: 'Receta 3',
            type: 'sendMessage',
            moreInfo: ingredients, 
          },
        ])
        setIngredients(ingredients)

      }, 1000)
    }
  }, [getRecipes])
}

export default useGetRecipes
