import React, { useContext, useEffect, useRef } from "react";
import { Container, Grid, Box } from '@mui/material';
import Product from "./product/Product";
import useLazyLoading from "react-simple-lazy-loading";
import { GET_PRODUCTS_ROUTE } from "../shared/constant/url";

const Home = () => {
  const loadingRef = useRef(null);
  const options = {
    refTriger: loadingRef,
    rootMargin: "100px",
    threshold: 1.0,
    url: GET_PRODUCTS_ROUTE
  }

  const { data, loading, page } = useLazyLoading(options);

  useEffect(() => {
    console.log(data, loading, page);
  }, [data])

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3}>
        {data?.map((item, i) =>
          <Product product={item} key={i} />
        )}
      </Grid>
      <Box ref={loadingRef} sx={{height: "200px", background: "red"}}></Box>
    </Container>
  );
};

export default Home;
