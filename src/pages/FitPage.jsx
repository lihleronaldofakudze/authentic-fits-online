import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClothCarouselComponent from "../components/ClothCarouselComponent";

import sanity, { urlFor } from "../services/sanity";
import { BsWhatsapp } from "react-icons/bs";
import ProductCardComponent from "../components/ProductCardComponent";
import GooglePayComponent from "../components/GooglePayComponent";

const FitPage = () => {
  const { slug } = useParams();
  const [cloth, setCloth] = useState();
  const [clothings, setClothings] = useState([]);

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "clothing" && slug.current == "${slug}"]{..., category->{_ref, title}}`
      )
      .then((data) => setCloth(data[0]))
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    // query clothing by category
    sanity
      .fetch(
        `*[_type == "clothing" && category._ref == "${cloth?.category._ref}"]{..., category->{title, slug}}`
      )
      .then((data) => console.log("clothing", data))
      .catch(console.error);
  }, [cloth]);

  return (
    <Container sx={{ my: 4 }}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          {/* <img
            src={cloth && urlFor(cloth?.images[0]).url()}
            alt={cloth?.title}
            width="100%"
          /> */}
        </Grid>
        <Grid item md={4} xs={12}>
          {/* {cloth && <ClothCarouselComponent images={cloth.images} />} */}
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography variant="body1" color="textSecondary">
            {cloth?.category.title}
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
          <GooglePayComponent />
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              startIcon={<BsWhatsapp />}
              href="https://wa.link/5yfj2h"
              target="_blank"
            >
              Eswatini
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="success"
              startIcon={<BsWhatsapp />}
              href="https://wa.link/uikv79"
              target="_blank"
            >
              Mzansi
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        textAlign="center"
        gutterBottom
        mt={5}
      >
        We sell both to Kingdom of Eswatini and South Africa
      </Typography>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        textAlign="center"
        gutterBottom
        mt={1}
      >
        {cloth?.category.toLocaleUpperCase()} RELATED FITS
      </Typography>
      <Grid container sx={{ my: 2 }}>
        <Grid item md={3} xs={12}>
          {clothings?.map((cloth, index) => (
            <ProductCardComponent key={index} cloth={cloth} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default FitPage;
