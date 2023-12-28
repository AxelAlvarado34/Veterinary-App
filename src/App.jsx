import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
