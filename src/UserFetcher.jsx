import { useEffect, useState } from "react"
const UserFetcher = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/3')
            .then(response => {
                return response.json()
            })
            .then(data => setUser(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h1>User Fetcher Component</h1>
            {(() => {
                
                if (user) {
                    return (
                  <>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                    </>
                    )
                } else {
                   return <p>Loading...</p>
                }
            })()}
            {/* {user ? (
                <>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                </>) : (
                <p>Loading...</p>  // Loading message until data is fetched
            )} */}
        </>
    )
}

export default UserFetcher