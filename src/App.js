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
  
  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
    isLoggedIn: false
  })

  const [getUserProfile, setUserProfile] = useState({})

  function loadAllUserProfile() {
    // needs turnary operation, 
    // if logged in, pull the information of logged in user,
    // if not logged in, don't
    // API.getProfile(token).then(res => {
    //   setUserProfile({
    //     users: res
    //   })
    // })
  }

  useEffect(() => {
    loadAllUserProfile()
  }, [])

  return (
    <Router>
      <NavBar 
        email={userSignIn.email}
        password={userSignIn.password}
        isLoggedIn={userSignIn.isLoggedIn}
        users={getUserProfile}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/userprofile/:id">
          <UserProfile />
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
          <CustomerOrder />
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
