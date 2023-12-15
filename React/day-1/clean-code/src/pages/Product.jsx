import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import "./Product.css";
const Product = () => {
  const Box = styled.div`
    margin: 40px;
    border: 5px black;
    font-size: 100px;
  `;
  const Head = styled.h1`
    color: black;
    font-size: 60px;
  `;

  return (
    <div>
      <Navbar />
      <Box>Products page</Box>
      <Head>css</Head>
    </div>
  );
};

export default Product;
