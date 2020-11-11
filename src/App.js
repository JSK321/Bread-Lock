import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Map from './pages/Map';
import FoodBank from './pages/FoodBank';
import CustomerOrder from './pages/CustomerOrder';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Router exact path="/map">
          <Map />
        </Router>
        <Router exact path="/foodbank">
          <FoodBank />
        </Router>
        <Router exact path="/customerorder">
          <CustomerOrder />
        </Router>
        <Router path="*">
          <NoMatch />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
