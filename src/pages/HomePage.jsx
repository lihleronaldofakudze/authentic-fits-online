import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TopLinksComponent from "../components/TopLinksComponent";
import adOne from "../assets/fitsad1.jpeg";
import adTwo from "../assets/fitsad2.jpeg";
import HomeAdComponent from "../components/HomeAdComponent";
import sanity from "../services/sanity";
import ProductCardComponent from "../components/ProductCardComponent";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    sanity
      .fetch('*[_type == "clothing"]{..., clothCategory->{...}}')
      .then(setClothing)
      .catch(console.error);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mb: 3 }}>
      {isMobile ? <Box /> : <TopLinksComponent />}
      <HomeAdComponent
        image={adOne}
        title={"EXTRA 20% OFF SALE: FINAL REDUCTIONS"}
        subtitle={
          "Shop the world’s greatest designers on sale with an extra 20% off. T&Cs apply; discount applied at checkout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"
        }
        other={false}
        isMobile={isMobile}
      />
      <HomeAdComponent
        image={adTwo}
        title={"Best Quality Fits"}
        subtitle={
          "Shop the world’s greatest designers on sale with an extra 20% off. T&Cs apply; discount applied at checkout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"
        }
        other={true}
        isMobile={isMobile}
      />
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Typography>
          New in: handpicked daily from the world’s best brand
        </Typography>
        {isMobile ? (
          <Box />
        ) : (
          <Button variant="outlined" color="inherit" size="small">
            Shop Now
          </Button>
        )}
      </Stack>
      <Grid container sx={{ my: 2 }}>
        <Grid item md={3} xs={12}>
          {clothing?.map((cloth, index) => (
            <ProductCardComponent key={index} cloth={cloth} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
