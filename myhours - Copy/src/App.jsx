import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Navigation from "./components/navbar.jsx"
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./components/footer.jsx"
import { AllRoutes } from './Routes/AllRoutes.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
function App() {
  const location = useLocation();
  const isSignInPage = location.pathname === '/signin';
  const isSignUpPage = location.pathname === '/signup';
  return (
    <ChakraProvider>
      <CSSReset />
      {!isSignInPage && !isSignUpPage && <Navigation />}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <AllRoutes />
      {!isSignInPage && !isSignUpPage && <Footer />}
      
    </ChakraProvider>
  );
}

export default App;
