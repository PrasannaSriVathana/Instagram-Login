import React from "react";
import "./signupContainer.css";
import {Link} from "react-router-dom";

const SignupContainer = () => {
    return (
        <div className="signupContainer">
            <h5 className="ques">Don't have an account?</h5>
            <Link className="sign" to="https://www.instagram.com/accounts/emailsignup/">
                <h5 className="signUp">Sign up</h5>
            </Link>
        </div>
    );
}

export default SignupContainer;