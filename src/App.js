import React from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Books from './Books'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>

      <Route path="/login" element={<Login/>}/>
      <Route path="/books" element={<Books/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App