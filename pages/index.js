import React from 'react'
import ChatView from '../src/view/ChatView'
import ChatProvider from '../src/context/ChatContext'

function App() {
  return (
    <ChatProvider>
      <ChatView/>
    </ChatProvider>

  );
}

export default App;