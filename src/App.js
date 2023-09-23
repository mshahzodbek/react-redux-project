import {Routes, Route} from 'react-router-dom'
import {Main, Login, Register} from './components'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App