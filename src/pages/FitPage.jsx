import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClothCarouselComponent from "../components/ClothCarouselComponent";
import sanity, { urlFor } from "../services/sanity";

const FitPage = () => {
  const { slug } = useParams();
  const [cloth, setCloth] = useState();

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "clothing" && slug.current == "${slug}"]{..., clothCategory->{...}}`
      )
      .then((data) => setCloth(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <Container sx={{ my: 4 }}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <img
            src={cloth && urlFor(cloth?.images[0]).url()}
            alt={cloth?.title}
            width="100%"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          {cloth && <ClothCarouselComponent images={cloth.images} />}
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography variant="body1" color="textSecondary">
            {cloth?.clothCategory.name}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            {cloth?.title}
          </Typography>
          <Typography>{cloth?.shortDescription}</Typography>
          <Typography variant="h5" my={2}>
            E{cloth?.price}
          </Typography>
          <TextField
            type="text"
            fullWidth
            select
            size="small"
            label="Select Size (Clothing Standard)"
            margin="normal"
          >
            {cloth?.sizes.map((size, index) => (
              <MenuItem key={index} value={size}>
                {size}
              </MenuItem>
            ))}
          </TextField>
          <Button fullWidth sx={{ mt: 1 }} variant="contained" color="primary">
            Buy Now
          </Button>
          <Button fullWidth sx={{ mt: 1 }} variant="contained" color="success">
            Order On WhatsApp
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FitPage;
