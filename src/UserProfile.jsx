import { useState, useContext, createContext } from "react"
import UserFetcher from "./UserFetcher"


const useContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUSer] = useState(
        {
            name: 'Jers',
            email: 'jers@gmail>com'
        }
    )
    return (
        <UserContext.Provider value={{ user }}> {children} </UserContext.Provider>
    )
}


const UserDetails = () => {
    const { user } = useContext()
    return (
        <>
            <h1>User Profile</h1>
            <h3>{user.name}</h3>
        </>
    )

}
const UserProfile = () => {

    return (
        <>
            <UserProvider >
                <UserDetails />
            </UserProvider>
        </>
    )

}

export default UserProfile