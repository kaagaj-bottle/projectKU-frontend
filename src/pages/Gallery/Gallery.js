import {
  Avatar,
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Tooltip,
  Grid,
} from "@mui/material";

import { StarBorder } from "@mui/icons-material";
import { nanoid } from "nanoid";
import "./Gallery.css";
import ImageCard from "../../components/CustomCards/ImageCard";
import { useEffect, useState } from "react";
import imageService from "../../services/images.js";
import { bgColour, minHeight } from "../../components/consts/navbarItems";
const Gallery = () => {
  const [imageData, setImageData] = useState([]);
  const [modalInfo, setModalInfo] = useState({
    src: "",
    title: "",
  });
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    imageService
      .getAll()
      .then((result) => {
        setImageData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleImageCardButton = (src, title, event) => {
    event.preventDefault();
    setCloseModal((prev) => !prev);
    setModalInfo({ src, title });
  };

  const handleCloseModal = (event) => {
    event.preventDefault();
    setCloseModal((prev) => !prev);
  };
  return (
    <Grid container sx={{ bgcolor: `${bgColour}` }}>
      <Container>
        <ImageList
          gap={12}
          sx={{
            mb: 8,
            pt: 3,
            gridTemplateColumns:
              "repeat(auto-fill, minmax(280px, 1fr))!important",
            minHeight: `${minHeight}`,
          }}
          variant="woven"
        >
          {imageData.map((item) => (
            <button
              onClick={(event) =>
                handleImageCardButton(item.img, item.title, event)
              }
              key={nanoid()}
            >
              <ImageListItem>
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)",
                  }}
                  title={item.title}
                  position="bottom"
                />
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ cursor: "pointer", borderRadius: "0.5rem" }}
                />
              </ImageListItem>
            </button>
          ))}
          {closeModal && (
            <ImageCard
              title={modalInfo.title}
              imgSrc={modalInfo.src}
              handleCloseModal={handleCloseModal}
            />
          )}
        </ImageList>
      </Container>
    </Grid>
  );
};

export default Gallery;
