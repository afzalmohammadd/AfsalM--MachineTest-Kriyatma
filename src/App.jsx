import React from 'react'
import Header from './components/header'
import { useState } from 'react'
import Step1 from './components/step1'

const App = () => {
    
    const [getStarted,setGetStarted] = useState(false)
    
    console.log(getStarted,"gs");
  return (
    <div className='bg-gray-100' >
        {getStarted ? <Step1 setGetStarted={setGetStarted} /> : <Header setGetStarted={setGetStarted} />}
    </div>
  )
}

export default App
