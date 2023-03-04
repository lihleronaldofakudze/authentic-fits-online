import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { about, customerService } from "../constants";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        bgcolor: "#222222",
        py: 3,
        color: "white",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              We sell both to Kingdom of Eswatini and South Africa
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="h6" gutterBottom>
              CUSTOMER SERVICE
            </Typography>
            {customerService.map((service, index) => (
              <Typography
                key={index}
                gutterBottom
                sx={{ cursor: "pointer" }}
                onClick={() =>
                  navigate(
                    service.toLowerCase().replace(" ", "_").replace("&", "and")
                  )
                }
              >
                {service}
              </Typography>
            ))}
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="h6" gutterBottom>
              ABOUT AUTHENTICFITS
            </Typography>
            {about.map((item, index) => (
              <Typography
                key={index}
                gutterBottom
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("")}
              >
                {item}
              </Typography>
            ))}
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="h6" gutterBottom>
              DESTINATION AND CURRENCY
            </Typography>
            <Typography gutterBottom>Eswatini, SZL / L / E</Typography>

            <Typography variant="h6" gutterBottom pt={3}>
              FOLLOW US
            </Typography>
            <Stack direction={"row"}>
              <IconButton
                href="https://www.instagram.com/authenticfits.swz/"
                target="_blank"
              >
                <BsInstagram color="white" />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/profile.php?id=100088524505723"
                target="_blank"
              >
                <BsFacebook color="white" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default FooterComponent;
