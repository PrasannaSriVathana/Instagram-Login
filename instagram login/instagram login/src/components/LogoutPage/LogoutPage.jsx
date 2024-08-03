import React from "react";
import "./logoutPage.css";

const LogoutPage = ({ handleLogout }) => {
    return (
        <div className="loggedInConatiner">
            <div className="cont">
                <h1 className="head2">Welcome</h1>
                <h3 className="head3">You are Logged In</h3>
                <button className="logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
export default LogoutPage;