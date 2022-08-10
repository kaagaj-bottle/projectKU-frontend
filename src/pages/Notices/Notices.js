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
import { Button, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { bgColour, minHeight } from "../../components/consts/navbarItems";

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
    <Grid
      container
      justifyContent={"center"}
      sx={{ bgcolor: `${bgColour}`, minHeight: `${minHeight}` }}
    >
      <Grid item xs={12} md={11} sx={{ p: 2 }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": {
                    fontSize: "1.2rem",
                    fontWeight: 700,
                  },
                }}
              >
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
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      ":hover": {
                        bgcolor: grey[300],
                      },
                    }}
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
      </Grid>
    </Grid>
  );
}

export default Notices;
