import React from 'react'
import Signup from './components/Signup'
import Main from './components/Main'
import { useSelector } from 'react-redux'

function App() {
  let selectemail = useSelector((store)=>store.email)
  console.log(selectemail)
  return (
    <div>
      {selectemail === "" ? <Signup/> : <Main/>}
    </div>
  )
}

export default App
