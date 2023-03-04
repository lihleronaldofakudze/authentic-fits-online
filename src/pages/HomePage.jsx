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
import HomeAdComponent from "../components/HomeAdComponent";
import sanity, { urlFor } from "../services/sanity";
import ProductCardComponent from "../components/ProductCardComponent";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [clothing, setClothing] = useState([]);
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    sanity
      .fetch('*[_type == "clothing"]{..., category->{title}}')
      .then(setClothing)
      .catch(console.error);
    sanity.fetch('*[_type == "advert"]').then(setAdverts).catch(console.error);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mb: 3 }}>
      {console.log(clothing)}
      {isMobile ? <Box /> : <TopLinksComponent />}
      <HomeAdComponent
        image={urlFor(adverts[0]?.image).url()}
        title={adverts[0]?.title}
        subtitle={adverts[0]?.description}
        link={adverts[0]?.link}
        other={false}
        isMobile={isMobile}
      />
      <HomeAdComponent
        image={urlFor(adverts[1]?.image).url()}
        title={adverts[1]?.title}
        subtitle={adverts[1]?.description}
        link={adverts[1]?.link}
        other={true}
        isMobile={isMobile}
      />
      <Typography
        variant="h4"
        fontWeight={"bold"}
        textAlign="center"
        gutterBottom
        my={4}
      >
        Available Products
      </Typography>
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
      <Grid container direction="row" sx={{ my: 2 }}>
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
