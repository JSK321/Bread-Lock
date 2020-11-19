import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";

export default function UserSignIn() {
    const [signInFormState, setSignInFormState] = useState({
        email: "",
        password: ""
    })

    const [profileState, setProfileState] = useState({
        userOrder: [],
        isLoggedIn: false
    })

    useEffect(() => {
        // use token here
        // const token = localStorage.getItem("token")
        // API route to get one profile with token
        // API.getOneProfile().then(profileData => {
        //     if(profileData){
        //         setProfileState({
        //             name: profileData.name,
        //             email: profileData.email,
        //             userOrder: profileData.
        //         })
        //     }
        // })
    }, [])

    const handleInputChange = event => {
        const { name, value } = event.target;
        setSignInFormState({
            ...signInFormState,
            [name]: value
        })

    }

    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-width-1-2@m">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle" uk-grid>
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">Sign In</h3>
                        </div>
                    </div>
                </div>
                <div className="uk-flex uk-flex-center">
                    <div className="uk-card-body uk-width-expand">
                        <form>
                            <input class="uk-input" type="text" name="email" value={signInFormState.email} onChange={handleInputChange} placeholder="Username" />
                            <input class="uk-input" type="password" name="password" value={signInFormState.password} onChange={handleInputChange} placeholder="Password" />

                            <div style={{ textAlign: "center" }}>
                                <br></br>
                                <input type="submit" value="Sign In" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
