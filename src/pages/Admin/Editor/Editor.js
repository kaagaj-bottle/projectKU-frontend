import React from "react";
import notices from "../../../services/notices";
import Notice from "./Notice";
import "./Editor.css";
import NoticeForm from "./NoticeForm";
import { nanoid } from "nanoid";

const Editor = ({
  notices,
  handleNoticeData,
  handleNoticeCreation,
  noticeTitle,
  noticePdfLink,
}) => {
  return (
    <div className="notices--block">
      <NoticeForm
        handleNoticeData={handleNoticeData}
        handleNoticeCreation={handleNoticeCreation}
        title={noticeTitle}
        pdfLink={noticePdfLink}
      />
      {notices.map((item) => (
        <Notice notice={item} key={nanoid()} />
      ))}
    </div>
  );
};

export default Editor;
