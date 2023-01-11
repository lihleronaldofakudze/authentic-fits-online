import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { links } from "../constants";

const TopLinksComponent = () => {
  return (
    <Grid container sx={{ my: 2 }}>
      <Grid
        item
        md={8}
        container
        alignItems={"center"}
        justifyContent="flex-start"
      >
        {links.map((link) => (
          <Button color="inherit" key={link}>
            {link}
          </Button>
        ))}
      </Grid>
      <Grid
        item
        md={4}
        container
        alignItems={"center"}
        justifyContent="flex-end"
      >
        <TextField type={"text"} label="Search" size="small" />
      </Grid>
    </Grid>
  );
};

export default TopLinksComponent;
