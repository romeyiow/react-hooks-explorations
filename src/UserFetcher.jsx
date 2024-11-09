import { useState, useEffect } from "react"
//ang panget mo kuya jers HAHAHAHAHA
const UserFetcher = () => {
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(1)
    // useEffect(effect, dependency) therefore two params; PAG WALANG dependency laging magra-run
    useEffect(() => {

        //XHR is primitive way of getting data 
        fetch('https://jsonplaceholder.typicode.com/users/' + userId) // can use stick which is <___>
            .then(promise => {
                if (!promise.ok) {
                    throw new Error("Error Message: Error 404")
                }
                return promise.json()
            })
            .then(data => { setUser(data) })

        //fetch return a promise
        //jsx is not readable to browser, we need transpiler
    }, [userId])

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    }
    return (
        <>
            <div>
                <input type="text"
                    onChange={handleUserIdChange}

                />
            </div>
            <div>
                {user && //null coalescing instead of ternary operator
                    <>
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.phone}</h3>
                    </>}

            </div>
        </>
    )
}

export default UserFetcher