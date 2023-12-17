import './App.css'
import Navbar from './Components/Navbar'
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Home from './Pages/Home';
function App() {
  return (
    <>
      <ChakraProvider>
        <CSSReset />
        <Navbar />
        <Home />
      </ChakraProvider>
    </>
  )
}

export default App
