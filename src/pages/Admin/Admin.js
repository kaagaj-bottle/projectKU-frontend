import { useState, useEffect } from "react";
import loginService from "../../services/login";
import noticeService from "../../services/notices";
import NoticeEditor from "./NoticeEditor/Editor";
import AboutPageCardEditor from "./AboutPageCardEditor/Editor";
import LoginForm from "./Login/LoginForm";
import commonFuncs from "../../components/commonFuncs";
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      commonFuncs.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const newUser = await loginService.login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(newUser));
      setUser(newUser);
      noticeService.setToken(newUser.token);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    if (name === "Username") {
      setUsername(value);
    } else if (name === "Password") {
      setPassword(value);
    }
  };

  const condRendering = () => {
    if (user === null) {
      return (
        <>
          <LoginForm
            handleChange={handleChange}
            handleLogin={handleLogin}
            username={username}
            password={password}
          />
        </>
      );
    }

    return (
      <div>
        <h3>
          {user.name} is logged in
          <button
            onClick={(event) => {
              event.preventDefault();
              window.localStorage.removeItem("loggedUser");
              window.location.reload();
            }}
          >
            logout
          </button>
          <NoticeEditor />
          <p />
          <AboutPageCardEditor />
        </h3>
      </div>
    );
  };
  return <>{condRendering()}</>;
};

export default App;
