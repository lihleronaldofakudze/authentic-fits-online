import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const HomeAdComponent = ({ image, title, subtitle, other, isMobile }) => {
  return (
    <Grid container spacing={4} sx={{ my: 1 }}>
      <Grid item md={6} xs={12} order={{ md: other ? 1 : 2 }}>
        <Box
          sx={{
            height: 500,
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></Box>
      </Grid>
      <Grid
        item
        order={{ md: other ? 2 : 1 }}
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent="center"
        md={6}
        xs={12}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          textAlign="center"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="body1" textAlign="center" gutterBottom>
          {subtitle}
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          sx={{ mt: 2 }}
          fullWidth={isMobile ? true : false}
        >
          Shop Now
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeAdComponent;
