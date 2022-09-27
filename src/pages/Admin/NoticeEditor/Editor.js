import noticeService from "../../../services/notices";
import Notice from "./Notice";
import "./Editor.css";
import NoticeForm from "./NoticeForm";
import { nanoid } from "nanoid";
import { useState, useEffect, useRef } from "react";

const Editor = ({}) => {
  const [notices, setNotices] = useState([]);
  const [noticeObj, setNoticeObj] = useState({
    title: "",
    pdfLink: "",
  });
  const noticeRef = useRef;

  useEffect(() => {
    noticeService.getAll().then((notices) => {
      setNotices(notices);
    });
  }, []);

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

  const noticeDeleteBtnClicked = async (event, id) => {
    event.preventDefault();
  };
  return (
    <div className="notices--block">
      <NoticeForm
        handleNoticeData={handleNoticeData}
        handleNoticeCreation={handleNoticeCreation}
        title={noticeObj.title}
        pdfLink={noticeObj.pdfLink}
      />
      {notices.map((item) => (
        <Notice notice={item} key={nanoid()} />
      ))}
    </div>
  );
};

export default Editor;
