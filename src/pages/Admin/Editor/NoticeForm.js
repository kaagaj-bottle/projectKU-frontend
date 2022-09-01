import "./NoticeForm.css";
const NoticeForm = ({
  handleNoticeCreation,
  handleNoticeData,
  title,
  pdfLink,
}) => {
  return (
    <>
      <h4>create new notice</h4>
      <form onSubmit={handleNoticeCreation} className="notice--form">
        <label htmlFor="title">title: </label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={handleNoticeData}
        />
        <br />
        <label htmlFor="pdfLink">pdfLink: </label>

        <input
          id="pdfLink"
          type="text"
          name="pdfLink"
          value={pdfLink}
          onChange={handleNoticeData}
          rows="5"
          column="5"
        />
        <br />
        <button type="submit">post</button>
      </form>
    </>
  );
};

export default NoticeForm;
