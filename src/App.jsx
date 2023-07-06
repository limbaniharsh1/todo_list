import React from 'react'
import Signup from './components/Signup'
import Main from './components/Main'
import { useSelector } from 'react-redux'

function App() {
  let selectemail = useSelector((store)=>store.email)
  console.log(selectemail)
  let rec =localStorage.getItem('record')
  // localStorage.setItem('record',rec)
  return (
    <div>
      {rec === ''|| selectemail==='' || !rec ? <Signup/> : <Main/>}
    </div>
  )
}

export default App
