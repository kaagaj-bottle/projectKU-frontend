import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { grey } from "@mui/material/colors";
const NoticeCard = ({ id, title, date, pdfUrl, handleViewPdf }) => {
  return (
    <Card
      sx={{ width: { xs: "80%" } }}
      onClick={(event) => {
        handleViewPdf(pdfUrl, event);
      }}
    >
      <CardActionArea sx={{ bgcolor: grey[400] }}>
        <CardContent>
          <Typography variant="body2">
            {title}
            <Typography variant="body2">{date}</Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default NoticeCard;
