import { useState } from "react"
const UserProfile = () => {
  const [user, setUser] = useState(
    {
      name: 'Jerome Imperial',
      email: 'jcimperial@gmail.com'
    }
  )

  const updateUser = () => {
    setUser({ 
      name: 'Elmer ', 
      email: 'some@thing' })
  }


  return (
    <>
      <h1>Jerome Imperial</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <button onClick={updateUser}>update user</button>
    </>
  )
}

const App = () => {

  return (
    <UserProfile />
  )
}

export default App;