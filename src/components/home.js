import React, { useContext } from "react";
import contextStore from "../shared/context/contextStore";
import { Container, Grid } from '@mui/material';
import Product from "./product/Product";

const Home = () => {
  const { products } = useContext(contextStore)
  // get products
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3}>
        {products?.map((item, i) =>
          <Product product={item} key={i} />
        )}
      </Grid>
    </Container>
  );
};

export default Home;
