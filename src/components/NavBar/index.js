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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/map">Map</a>
            </li>
            {/* <li>
            <a href="#">View Pantry</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a href="/customerorder">Order Page</a>
                </li>
                <li>
                  <a href="/pantrydata">Available Food</a>
                </li>
                <li>
                  <a href="/customerqueue">Recipient Queue List</a>
                </li>
              </ul>
            </div>
          </li> */}
            <li>
              <a href="#">Sign Up</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a href="/adminhome">Admin Home Page</a>
                  </li>
                  <li>
                    <a href="/fbsignup">Register Food Bank</a>
                  </li>
                  <li>
                    <a href="/signup">Register as Recipient</a>
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
