import background from "../../images/background.jpg";
import { Link } from "react-router-dom";

let sectionStyle = {
  backgroundImage: "url(" + background + ")",
  width: "100%",
};

export default function NavBar(props) {
  return (
    <div uk-sticky="bottom: #offset">
      <nav
        className="uk-navbar-container"
        uk-navbar="dropbar:true"
        style={sectionStyle}
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            {/* <li>
            <Link to="#">View Pantry</Link>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <Link to="/customerorder">Order Page</Link>
                </li>
                <li>
                  <Link to="/pantrydata">Available Food</Link>
                </li>
                <li>
                  <Link to="/customerqueue">Recipient Queue List</Link>
                </li>
              </ul>
            </div>
          </li> */}
            <li>
              <Link to="#">Sign Up</Link>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <Link to="/adminhome">Admin Home Page</Link>
                  </li>
                  <li>
                    <Link to="/fbsignup">Register Food Bank</Link>
                  </li>
                  <li>
                    <Link to="/signup">Register as Recipient</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul class="uk-navbar-nav">
            {props.isLoggedIn ? <li><Link to="/userprofile">My Profile</Link></li> : <li><Link to="/signin">Sign In</Link></li>}
            {/* <li>
            {props.users != undefined ? (
              props.isLoggedIn ?
                props.users.map((data =>
                  <Link to={"/userprofile/" + data.id}>My Profile</Link>
                )) : <a href="/signin">Sign In</a>
            ) : null}
          </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
