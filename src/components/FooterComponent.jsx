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

const FooterComponent = () => {
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
          <Grid item md={4} xs={12}>
            <Typography variant="h6" gutterBottom>
              CUSTOMER SERVICE
            </Typography>
            {customerService.map((service, index) => (
              <Typography key={index} gutterBottom sx={{ cursor: "pointer" }}>
                {service}
              </Typography>
            ))}
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="h6" gutterBottom>
              ABOUT AUTHENTICFITS
            </Typography>
            {about.map((item, index) => (
              <Typography key={index} gutterBottom sx={{ cursor: "pointer" }}>
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
              <IconButton>
                <BsInstagram color="white" />
              </IconButton>
              <IconButton>
                <BsFacebook color="white" />
              </IconButton>
              <IconButton>
                <BsTwitter color="white" />
              </IconButton>
              <IconButton>
                <BsPinterest color="white" />
              </IconButton>
              <IconButton>
                <BsYoutube color="white" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default FooterComponent;
