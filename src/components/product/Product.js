import React from 'react'
import { Grid, Paper, Box, Typography, Rating, Button } from '@mui/material';
import "./product.css";
import { BsCartPlus } from "react-icons/bs"
const Product = ({ product }) => {

    return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper sx={{ paddingBottom: "18px" }} elevation={4}>
                <Box className="product-productImage" sx={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_TB1R7WQQj3k8YOcqQ9zKnPYKfQyPMnj2w&usqp=CAU)" }}></Box>
                <Box sx={{ direction: "rtl" }} overflow={'hidden'} paddingX={1}>
                    <Typography variant='h5' component="h2">מעיל חורף</Typography>
                    <Typography sx={{ fontSize: "17px", lineHeight: "18px" }} whiteSpace={"pre-wrap"} variant='subtitle2' component="h2">תיאור המוצר: מוצר חדש, נמכר עקב חוסר בשימוש</Typography>
                    <Typography variant="h6" component="h2">מחיר: ₪50</Typography>
                </Box>
                <Box paddingX={1} display={"flex"} justifyContent={"end"}>
                    <Rating onChange={(e, value) => console.log(value)} name="half-rating" defaultValue={2.3} precision={0.5} readOnly />
                </Box>
                <Box marginTop={1} display={"flex"} alignItems={"center"} justifyContent="space-evenly">
                    <Button variant="contained" className="product-cartBtn"><BsCartPlus style={{ color: "black" }} size={31} /></Button>
                    <Button className="product-buyNowBtn" variant="contained">קנה עכשיו</Button>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Product