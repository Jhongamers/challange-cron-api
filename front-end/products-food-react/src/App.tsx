import { useState } from 'react'

import ListProduct from './Components/LIstProduct'
import Global from './global'
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Global />
       <Header />
      <ListProduct  />  
    </div>
  )
}

export default App
