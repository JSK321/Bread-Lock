import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import NavBar from './components/NavBar';
//User pages
import Home from './pages/User/Home';
import SignUp from './pages/User/SignUp';
import Profile from './pages/User/Profile';
import CustomerOrder from './pages/User/CustomerOrder';
//Food Bank Pages
import Map from './pages/FoodBank//Map';
import FoodBank from './pages/FoodBank/FoodBankDetails';
import PantryPreview from './pages/FoodBank/PantryPreview';
//Admin Pages
import AdminHome from './pages/Admin/AdminHome';
import CustomerQueue from './pages/Admin/CustomerQueue';
import PantryData from './pages/Admin/PantryData';
//No Matches Page
import NoMatch from './pages/NoMatch';

function App() {
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
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Router exact path="/map">
          <Map />
        </Router>
        <Router exact path="/foodbank">
          <FoodBank />
        </Router>
        <Router exact path="/pantry">
          <PantryPreview />
        </Router>
        <Router exact path="/customerorder">
          <CustomerOrder />
        </Router>
        <Router exact path="/adminhome">
          <AdminHome />
        </Router>
        <Router exact path="/customerqueue">
          <CustomerQueue />
        </Router>
        <Router exact path="/pantrydata">
          <PantryData />
        </Router>
        <Router path="*">
          <NoMatch />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
