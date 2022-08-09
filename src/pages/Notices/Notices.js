import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import noticeService from "../../services/notices";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";

function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    noticeService.getAll().then((notices) => {
      setNotices(notices);
    });
  }, []);

  const handleViewPdf = (event, pdfUrl) => {
    event.preventDefault();
    window.open(pdfUrl);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notices.map((row) => {
            const formattedDate = new Date(row.date);
            return (
              <TableRow
                key={nanoid()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  {formattedDate.toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={(event) => handleViewPdf(event, row.pdfUrl)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import { getAllByAltText } from "@testing-library/react";
// import React, { useEffect, useState } from "react";
// import NoticeCard from "../../components/CustomCards/NoticeCard";
// import noticeService from "../../services/notices";
// import { nanoid } from "nanoid";
// import { Grid } from "@mui/material";
// const Notices = () => {
//   const [notices, setNotices] = useState([]);

//   useEffect(() => {
//     noticeService.getAll().then((notices) => {
//       setNotices(notices);
//     });
//   }, []);

//   console.log(notices);
//   const handleViewPdf = (url, event) => {
//     event.preventDefault();
//     window.open(url);
//   };

//   return (
//     <>
//       <Grid container gap={2} justifyContent="center" sx={{ mt: 3 }}>
//         {notices.map((notice) => {
//           return (
//             <NoticeCard
//               key={nanoid()}
//               title={notice.title}
//               pdfUrl={notice.pdfUrl}
//               date={notice.date}
//               handleViewPdf={handleViewPdf}
//             />
//           );
//         })}
//       </Grid>
//     </>
//   );
// };

export default Notices;
