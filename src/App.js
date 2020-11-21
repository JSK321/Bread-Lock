import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "./utils/API";
//Components
import NavBar from './components/NavBar';
//User pages
import Home from './pages/User/Home';
import SignUp from './pages/User/SignUp';
import SignIn from './pages/User/SignIn';
import UserProfile from './pages/User/UserProfile';
import CustomerOrder from './pages/User/CustomerOrder';
//Food Bank Pages
import Map from './pages/FoodBank//Map';
import FoodBank from './pages/FoodBank/FoodBankDetails';
import FbSignUp from './pages/FoodBank/FoodBankSignUp';
import PantryPreview from './pages/FoodBank/PantryPreview';
import FoodBankQueue from './pages/Admin/FoodBankQueue/'
//Admin Pages
import AdminHome from './pages/Admin/AdminHome';
import CustomerQueue from './pages/User/CustomerQueue';
import PantryData from './pages/Admin/PantryData';
//No Matches Page
import NoMatch from './pages/NoMatch';
//Footer
import Footer from './components/Footer'

function App() {
  const [signInFormState, setSignInFormState] = useState({
    email: "",
    password: ""
  })

  const [profileState, setProfileState] = useState({
    id: "",
    email: "",
    token:"",
    userOrder: [],
    isLoggedIn: false
  })

  // const [userProfile, setUserProfile] = useState({
  //   user: ""
  // })

  useEffect(() => {
    // use token here
    const token = localStorage.getItem("token")
    // API route to get one profile with token
    API.getProfile(token).then(profileData => {
      if (profileData) {
        setProfileState({
          id: profileData.id,
          email: profileData.email,
          token: token,
          isLoggedIn: true
        })
      }
    }
    )
  }, [])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSignInFormState({
      ...signInFormState,
      [name]: value
    })

  }

  const handleFormSubmit = event => {
    event.preventDefault();
    //API call to log in with token
    API.login(signInFormState).then(loggedInData => {
      localStorage.setItem("token", loggedInData.token)
      // console.log(loggedInData)
      const token = loggedInData.token
      API.getProfile(loggedInData.token).then(profileData => {
        // console.log(profileData)
        // console.log(token);
        setProfileState({
          id: profileData.id,
          email: profileData.email,
          token: token,
          isLoggedIn: true
        })
      })
    })
  }

  // const [userSignIn, setUserSignIn] = useState({
  //   email: "",
  //   password: "",
  //   isLoggedIn: false
  // })

  // const [getUserProfile, setUserProfile] = useState({})

  // function loadAllUserProfile() {
  //   // needs turnary operation, 
  //   // if logged in, pull the information of logged in user,
  //   // if not logged in, don't
  //   // API.getProfile(token).then(res => {
  //   //   setUserProfile({
  //   //     users: res
  //   //   })
  //   // })
  // }

  // useEffect(() => {
  //   loadAllUserProfile()
  // }, [])

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn
            email={signInFormState.email}
            password={signInFormState.password}
            isLoggedIn={profileState.isLoggedIn}
            // users={getUserProfile}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </Route>
        <Route exact path="/customerprofile">
          <UserProfile
            id={profileState.id}
            token={profileState.token}
            isLoggedIn={profileState.isLoggedIn}
            // users={getUserProfile}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        <Route exact path="/foodbank/:id">
          <FoodBank />
        </Route>
        <Route exact path="/fbsignup">
          <FbSignUp />
        </Route>
        <Route exact path="/pantry/:id">
          <PantryPreview />
        </Route>
        <Route exact path="/customerorder">
          <CustomerOrder />
        </Route>
        <Route exact path="/customerorder/:id">
          <CustomerOrder  
            id={profileState.id}
            token={profileState.token}
            isLoggedIn={profileState.isLoggedIn}/>
        </Route>
        <Route exact path="/adminhome">
          <AdminHome />
        </Route>
        <Route exact path="/customerqueue/:id">
          <CustomerQueue />
        </Route>
        <Route exact path="/foodbankqueue/:id">
          <FoodBankQueue />
        </Route>
        <Route exact path="/pantrydata/:id">
          <PantryData />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
