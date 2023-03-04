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
import { useNavigate } from "react-router-dom";
import sa from "../assets/download.png";

const NavbarComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanity
      .fetch('*[_type == "category"][0...5]{title}')
      .then(setCategories)
      .catch(console.error);
  }, []);

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
                <Button
                  color="inherit"
                  key={category}
                  onClick={() =>
                    navigate(`/category/${category.toLocaleLowerCase()}`)
                  }
                >
                  {category}
                </Button>
              ))
            )}
          </Grid>
          <Grid item container justifyContent={"center"} xs={4}>
            <Stack justifyContent={"center"} alignItems="center">
              <Typography
                variant={isMobile ? "body1" : "h4"}
                fontWeight={"bold"}
                onClick={() => navigate("/")}
                sx={{ cursor: "pointer" }}
              >
                AUTHENTICFITS
              </Typography>
              <Typography
                variant={"subtitle"}
                onClick={() => navigate("/")}
                sx={{ cursor: "pointer" }}
              >
                We sell both to Kingdom of Eswatini and South Africas
              </Typography>
            </Stack>
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
              <Stack direction="row">
                <Avatar srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/255px-Flag_of_Eswatini.svg.png" />
                <Avatar srcSet={sa} sx={{ ml: 1 }} />
                <IconButton sx={{ ml: 1 }}>
                  <MdPerson />
                </IconButton>
              </Stack>
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
