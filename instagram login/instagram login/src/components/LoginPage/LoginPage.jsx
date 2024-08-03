import React, { useState } from "react";
import "./loginPage.css";
import { Link } from "react-router-dom";
import SignupContainer from "../SignupContainer/SignupContainer";
import GetAppContainer from "../GetAppContainer/GetAppContainer";

const LoginPage = ({ email, password, handleLogin,setEmail,setPassword, error }) => {
    const[showPassword, setShowPassword] = useState(false);
    const handleShow = () =>{
        setShowPassword(!showPassword);
    }

    return (
        <div className="app">
            <img alt="insta"
                 src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png"
                 className="imageContainer"/>
            <div className="appContainer">
                <div className="loginContainer">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.uZLxYBlwH7fmyuJe_7V1dAHaEK&pid=Api&P=0&h=180"
                         alt="instagram" className="instagram"/>
                    <form onSubmit={handleLogin} className="loginForm">
                        <div className="entryArea">
                            <input className="email"
                                   placeholder=" "
                                   value={email}
                                   onChange={(e) => {
                                       setEmail(e.target.value);
                                   }}
                            />
                            <div className="labelLine">Phone number, username or email address</div>
                        </div>
                        <div className="password">
                            <div className="entryArea1">
                                <input className="pass"
                                       type={showPassword ? "text" : "password"}
                                       placeholder=" "
                                       value={password}
                                       onChange={(e) => {
                                           setPassword(e.target.value);}}
                                />
                                <div className="labelLine1">Password</div>
                            </div>
                            <button className="show" onClick={handleShow}>{showPassword ? "Hide" : "Show"}</button>
                        </div>
                        <button className="login" type="submit">Log in</button>
                    </form>
                    <div className="or">OR</div>
                    <Link className="fb" to="https://www.facebook.com/login/">
                        <div className="facebook">
                            <img className="facebookIcon" alt="facebookicon"
                                 src="https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-3ss3dgti.png"/>
                            <h5 className="content">Log in with Facebook</h5>
                        </div>
                    </Link>
                    {error && <h6 id="error" className="error">{error}</h6>}
                    <Link className="fp" to="https://www.instagram.com/accounts/password/reset/">
                        <h6 className="forgot">Forgotten your password?</h6>
                    </Link>
                </div>
                <SignupContainer />
                <GetAppContainer />
            </div>
        </div>
            );
            };

            export default LoginPage;
