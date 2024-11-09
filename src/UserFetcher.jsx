import { useEffect, useState } from "react"
const UserFetcher = () => {
    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users/3')
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => setUser(data))
    //         .catch(error => console.log(error))
    // }, [])
     useEffect (() => {
        fetch('')
        .then(fetchedData => {return fetchedData.json()})
        .then(convertedData => {setUser(convertedData)})
        .catch(error => {console.log(error)})
     },[])
    return (
        <>
            <h1>User Fetcher Component</h1>
            
            {user ? (
                <>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                </>) : (
                <p>Loading...</p>  // Loading message until data is fetched
            )}
            {null ? (<>is no longer null</>):(user)}

            {/* {(() => {
                
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
            })()} */}
        </>
    )
}

export default UserFetcher