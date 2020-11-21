import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomerSignUpInfo from '../../../components/CustomerSignUpInfo'
import API from "../../../utils/API";
import {URL_PREFIX, URL_REDIRECT} from "../../../utils/urlPointer";

export default function UserProfile(props) {

    const [userProfile, setUserProfile] = useState({})

    function loadUserProfile(id, token) {
        API.getOneProfile(id, token).then(res => {
            setUserProfile({
                userInfo: res
            })
        })
    }

    function rerenderPage() {
        // console.log(props)
        if (props.isLoggedIn) {
            // console.log("yes");
            // console.log(props.token);
            loadUserProfile(props.id, props.token)
        } else{
            console.log("why are you here");
            // rerenderPage()
        }
        //  else {
        //     window.location.href=`${URL_REDIRECT}/signin`
        // }
    }

    useEffect(() => {
        rerenderPage()
    }, [props.id, props.isLoggedIn])

    return (
        <div>
            {userProfile.userInfo != undefined ? (
                <CustomerSignUpInfo
                    firstName={userProfile.userInfo.firstName}
                    lastName={userProfile.userInfo.lastName}
                    phone={userProfile.userInfo.phone}
                    email={userProfile.userInfo.email}
                    address={userProfile.userInfo.address}
                    cityName={userProfile.userInfo.cityName}
                    stateAbr={userProfile.userInfo.stateAbr}
                    zipCode={userProfile.userInfo.zipCode}
                    id={props.id}
                    token={props.token}
                    isLoggedIn={props.isLoggedIn}
                />
            ) : null
            }
        </div>
    )
}
