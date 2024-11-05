import { useState } from 'react'
import './App.css'

const Button = () => {
  const [count, setCount] = useState(0)
  const updateCountToTen = () => {
    setCount(10)
  }
  
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={updateCountToTen}>updateCountToTen</button>
    </>
  )
}

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <button onClick={increment}>increment</button>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>decrement</button>
      <Button />
    </>
  )
}

export default App;