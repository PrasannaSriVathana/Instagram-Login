import './App.css';
import React,{useState} from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import LogoutPage from "./components/LogoutPage/LogoutPage.jsx";

const User = {
  email: 'prasanna33@gmail.com',
  password: 'password',
};


const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setEmail('');
    setPassword('');
  };


  const handleLogin = () => {

    if (email === User.email && password === User.password){
      setIsLoggedIn(true);
      setError("");
      localStorage.setItem("isLoggedIn","true");
    }
    else{
      setError("There was a problem with logging you in to Instagram. Please try again soon.");
    }
  };



  return (
      <div className="box">
        {isLoggedIn ? (
            <LogoutPage
                handleLogout={handleLogout}
            />
        ) : (
            <LoginPage
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogin={handleLogin}
                error={error}
            />
        )}
      </div>
  );
}

export default App;
