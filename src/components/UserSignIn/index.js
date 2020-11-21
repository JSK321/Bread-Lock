import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";


export default function UserSignIn(props) {

    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-width-1-2@m">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle" uk-grid>
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">Sign In</h3>
                        </div>
                    </div>
                </div>
                <div className="uk-flex uk-flex-center">
                    <div className="uk-card-body uk-width-expand">
                        <form onSubmit={props.handleFormSubmit}>
                            <input class="uk-input" type="text" name="email" value={props.email} onChange={props.handleInputChange} placeholder="Email" />
                            <input class="uk-input" type="password" name="password" value={props.password} onChange={props.handleInputChange} placeholder="Password" />

                            <div style={{ textAlign: "center" }}>
                                <br></br>
                                {/* <Link to="/customerprofile"> */}
                                    <input type="submit" value="Sign In" />
                                    {/* </Link> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
