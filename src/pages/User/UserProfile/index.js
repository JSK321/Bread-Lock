import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomerSignUpInfo from '../../../components/CustomerSignUpInfo'
import API from "../../../utils/API";

export default function Profile() {
    const { id } = useParams()

    const [userProfile, setUserProfile] = useState({})

    function loadUserProfile(id) {
        API.getOneProfile(id).then(res=> {
            setUserProfile({
                userInfo: res
            })
        })
    }

    useEffect(()=> {
       loadUserProfile(id)
    }, [])

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
                />
            ) : null
        }
        </div>
    )
}
