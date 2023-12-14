
import { BrowserRouter,Route,Routes } from 'react-router-dom'


 import Navigation from './components/Navigation'
 import Home from './components/Home'
 import Register from './components/Register'


function App() {


  return (
    <>
      <Navigation/>
      <BrowserRouter>
     <Routes>
      <Route path="/register" element={<Register/>}/>
     </Routes>
     </BrowserRouter> 
      <Home/>
     
      
    </>
  )
}

export default App
