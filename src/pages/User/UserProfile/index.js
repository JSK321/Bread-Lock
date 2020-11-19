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
       loadUserProfile()
    }, [])

    return (
        <div>
            <h1>Profile</h1>
            {/* <CustomerSignUpInfo /> */}
        </div>
    )
}
