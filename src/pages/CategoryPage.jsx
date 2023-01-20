import { Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCardComponent from "../components/ProductCardComponent";
import sanity from "../services/sanity";

const CategoryPage = () => {
  const { category } = useParams();
  const [clothings, setClothings] = useState([]);

  useEffect(() => {
    sanity
      .fetch(`*[_type == "clothing" && category == "${category}"]`)
      .then(setClothings)
      .catch(console.log);
  }, [category]);

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        fontWeight={"bold"}
        textAlign="center"
        gutterBottom
      >
        {category.toLocaleUpperCase()}
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

export default CategoryPage;
