import React from 'react'
import UserSignIn from '../../../components/UserSignIn'

export default function SignIn(props) {
    return (
        <div>
            <UserSignIn 
              email={props.email}
              password={props.password}
              isLoggedIn={props.isLoggedIn}
              // users={getUserProfile}
              handleInputChange={props.handleInputChange}
              handleFormSubmit={props.handleFormSubmit}
            />
        </div>
    )
}
