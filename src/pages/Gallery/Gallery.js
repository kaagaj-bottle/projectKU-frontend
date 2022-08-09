import {
  Avatar,
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Tooltip,
} from "@mui/material";

import { StarBorder } from "@mui/icons-material";
import { nanoid } from "nanoid";

const Gallery = () => {
  return (
    <Container>
      <ImageList
        gap={12}
        sx={{
          mb: 8,
          pt: 3,
          gridTemplateColumns:
            "repeat(auto-fill, minmax(280px, 1fr))!important",
        }}
        variant="woven"
      >
        {itemData.map((item) => (
          <Card key={nanoid()}>
            <ImageListItem>
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)",
                }}
                title={item.title}
                // actionIcon={
                //   <Tooltip title={item.title} sx={{ mr: "5px" }}>
                //     <Avatar src={item.img} />
                //   </Tooltip>
                // }
                position="bottom"
              />
              <img
                src={item.img}
                alt={item.title}
                style={{ cursor: "pointer" }}
              />
            </ImageListItem>
          </Card>
        ))}
      </ImageList>
    </Container>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

export default Gallery;
