import welcome from "./welcome"

const messages = {
  welcome,
  showRecipes: [
    {
      message: 'Si, gracias', 
      type: 'USER'
    },
    {
      message: 'Buscaré unas resetas para ti', 
      type: 'BOT'
    },
  ],
  showFoodTypeOption: [
    {
      message: 'Ahora no, gracias', 
      type: 'USER'
    },
    {
      message: 'Quiero ver más opciones', 
      type: 'USER'
    },
    {
      message: 'Con gusto...', 
      type: 'BOT'
    },
    {
      message: '¿Quieres desayunar, almorzar o cenar?', 
      type: 'BOT'
    },
  ],
}

export default messages