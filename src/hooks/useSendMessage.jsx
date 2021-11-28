import { useContext, useEffect } from 'react'
import { ChatContext } from '../context/ChatContext'
import { useRouter } from 'next/dist/client/router'

const urlWapApi = (options) => {
  const { ingredients,  foodType,  phone=573178919187, vendor='Luis' } = options 
  const ingredientsText = ingredients?.toString().replaceAll(',', ', ')
  const initMessage = `Hola ${vendor}, necesito los siguientes ingredientes para preparar mi ${foodType}: `
  const urlBase = 'https://api.whatsapp.com/send?'
  return `${urlBase}phone=+${phone}&text=${initMessage} ${ingredientsText}`
}

const useSendMessage = () => {
  const router = useRouter()
  const { ingredients, foodType } = useContext(ChatContext)
  const { sendMenuRequest, setSendMenuRequest } = useContext(ChatContext)
  useEffect(() => {
    if(sendMenuRequest) {
      setSendMenuRequest(false)
      const url = urlWapApi({
        ingredients,
        foodType
      })
      router.push(url)
    }
  }, [sendMenuRequest])

}

export default useSendMessage
