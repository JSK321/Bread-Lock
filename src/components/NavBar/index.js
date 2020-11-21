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
              {props.isLoggedIn ? null : <Link to="/signup">Sign Up</Link>}
              {/* <div className="uk-navbar-dropdown">
                <ul className= "uk-nav uk-navbar-dropdown-nav">
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
              </div> */}
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul class="uk-navbar-nav">
            {props.isLoggedIn ? 
              <li><Link to="/customerprofile">My Profile</Link></li> : null}
            {props.isLoggedIn ?
              <li>
                <Link to="/" onClick={props.onClick}>Sign Out</Link>
              </li> :
              <li>
                <Link to="/signin">Sign In</Link>
              </li>}
          </ul>
        </div>
      </nav>
    </div>
  );
}
