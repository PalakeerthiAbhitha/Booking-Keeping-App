import React from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import Books from './Books'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/books" element={<Books/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App