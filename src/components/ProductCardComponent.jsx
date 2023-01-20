import { Box, Button, Fab, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { urlFor } from "../services/sanity";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProductCardComponent = ({ cloth }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const navigate = useNavigate();
  return (
    <Box
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`/fit/${cloth.slug.current}`)}
    >
      <Box>
        <IconButton
          sx={{
            position: "absolute",
            bgcolor: "transparent",
          }}
        >
          <MdFavoriteBorder size={25} />
        </IconButton>
        <img
          src={urlFor(cloth.images[selectedImage]).url()}
          alt={cloth.title}
          width="100%"
          height={330}
          onMouseEnter={() => setSelectedImage(1)}
          onMouseLeave={() => setSelectedImage(0)}
          style={{ transition: "all 4s ease-in-out 1s" }}
        />
      </Box>
      <Box>
        <Typography color="textSecondary">{cloth.category}</Typography>
        <Typography fontWeight={"bold"}>{cloth.title}</Typography>
        <Typography gutterBottom>{cloth.shortDescription}</Typography>
        <Typography variant="h5" fontWeight={"bold"}>
          E{cloth.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCardComponent;
