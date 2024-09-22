import './App.css'
import { Routes, Route } from 'react-router-dom'
import ConsultaTabla from './assets/Table'
function App() {
  
  return (
    <>
      
      <Routes>
        
        <Route path='/' element={<ConsultaTabla/>}/>
         
      </Routes> 
    </>
     
  )
}

export default App
