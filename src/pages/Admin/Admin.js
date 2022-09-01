import { useState, useEffect, useRef } from "react";
import loginService from "../../services/login";
import noticeService from "../../services/notices";
import Editor from "./Editor/Editor";
import LoginForm from "./Login/LoginForm";
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [notices, setNotices] = useState([]);
  const [noticeObj, setNoticeObj] = useState({
    title: "",
    pdfLink: "",
  });
  const noticeRef = useRef();

  useEffect(() => {
    noticeService.getAll().then((notices) => {
      setNotices(notices);
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noticeService.setToken(user.token);
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

  const handleNoticeData = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setNoticeObj((prevNoticeObj) => {
      return { ...prevNoticeObj, [name]: value };
    });
  };

  const handleNoticeCreation = async (event) => {
    event.preventDefault();
    try {
      const returnedNotice = await noticeService.create(noticeObj);
      setNotices((prevNotices) => prevNotices.concat(returnedNotice));
      setNoticeObj({
        title: "",
        pdfLink: "",
      });
      noticeRef.current.toggleVisibility();
    } catch (exception) {
      console.log(exception);
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
          <Editor
            notices={notices}
            handleNoticeData={handleNoticeData}
            handleNoticeCreation={handleNoticeCreation}
            noticeTitle={noticeObj.title}
            noticePdfLink={noticeObj.pdfLink}
          />
        </h3>
      </div>
    );
  };
  return <>{condRendering()}</>;
};

export default App;
