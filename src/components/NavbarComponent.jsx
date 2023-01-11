import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  MdFavorite,
  MdPerson,
  MdShoppingBag,
  MdMenu,
  MdSearch,
} from "react-icons/md";
import { categories } from "../constants";

const NavbarComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar color="inherit" elevation={0} position="relative">
      <Toolbar>
        <Grid container alignItems={"center"} justifyContent="space-between">
          <Grid item container alignItems={"center"} xs={4}>
            {isMobile ? (
              <Stack direction={"row"}>
                <IconButton>
                  <MdMenu />
                </IconButton>
                <IconButton>
                  <MdSearch />
                </IconButton>
              </Stack>
            ) : (
              categories.map((category) => (
                <Button color="inherit" key={category}>
                  {category}
                </Button>
              ))
            )}
          </Grid>
          <Grid item container justifyContent={"center"} xs={4}>
            <Typography variant={isMobile ? "body1" : "h4"} fontWeight={"bold"}>
              AUTHENTICFITS
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={"flex-end"}
            alignItems="center"
            xs={4}
          >
            {isMobile ? (
              <Box />
            ) : (
              <>
                <Avatar />
                <IconButton sx={{ ml: 1 }}>
                  <MdPerson />
                </IconButton>
              </>
            )}
            <IconButton sx={{ ml: isMobile ? 0 : 1 }}>
              <MdFavorite />
            </IconButton>
            <IconButton sx={{ ml: isMobile ? 0 : 1 }}>
              <MdShoppingBag />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;