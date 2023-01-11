import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TopLinksComponent from "../components/TopLinksComponent";
import adOne from "../assets/fitsad1.jpeg";
import adTwo from "../assets/fitsad2.jpeg";
import HomeAdComponent from "../components/HomeAdComponent";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="xl">
      {isMobile ? <Box /> : <TopLinksComponent />}
      <HomeAdComponent
        image={adOne}
        title={"EXTRA 20% OFF SALE: FINAL REDUCTIONS"}
        subtitle={
          "Shop the world’s greatest designers on sale with an extra 20% off. T&Cs apply; discount applied at checkout"
        }
        other={false}
        isMobile={isMobile}
      />
      <HomeAdComponent
        image={adTwo}
        title={"Best Quality Fits"}
        subtitle={
          "Shop the world’s greatest designers on sale with an extra 20% off. T&Cs apply; discount applied at checkout"
        }
        other={true}
        isMobile={isMobile}
      />
    </Container>
  );
};

export default HomePage;
