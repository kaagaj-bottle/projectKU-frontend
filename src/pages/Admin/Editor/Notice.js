import React from "react";
import Togglable from "../../../components/Togglable";
import "./Notice.css";
const Notice = ({ notice }) => {
  return (
    <div className="notice">
      <div>
        title: {notice.title}
        {/* <button onClick={deleteBtnClicked}>delete</button> */}
        <Togglable buttonLabel0="more" buttonLabel1="less">
          <p>author: {notice.postedBy}</p>
          <p>link: {notice.pdfLink}</p>
        </Togglable>
      </div>
    </div>
  );
};

export default Notice;
