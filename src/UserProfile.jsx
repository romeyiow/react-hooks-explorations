import { useState, useEffect } from "react"
import UserFetcher from "./UserFetcher"

const UserProfileChild = (props) => { //1

    return <UserProfileGrandChild user={user} />

}
const UserProfileGrandChild = (props) => { //2
    return <UserProfileGreatGrandChild user={props} />
}
const UserProfileGreatGrandChild = (props) => { //3
    return (
        <>
            <p>User Profile</p>
            <p>{props.name}</p>
            <p>{props.email}</p>
        </>
    )
}


const UserProfile = () => { //Parent
    const user = {
        name: 'Jerome',
        email: '@gmail.com'
    }
    return <UserProfileChild user={user}/>

}

export default UserProfile