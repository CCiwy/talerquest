import './App.css'
import  { Login } from './Login'
import { SessionProvider } from './SessionProvider'


function App() {

  return (
    <SessionProvider>
        <h1>HI CHAT</h1>
        <Login />
    </SessionProvider>
  )
}

export default App
