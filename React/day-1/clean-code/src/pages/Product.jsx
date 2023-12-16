import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Data from "../components/New";
import "./Product.css";
const Product = () => {
  const [data, setData] = useState(Data);
  console.log(data, "data");
  // {
  //   img: "https://example.com/product5.jpg",
  //   name: "Product 5",
  //   price: 59.99,
  //   description:
  //     "This is the description for Product 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div id="products">
        <h1>Products</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          {data.map((ele) => {
            return (
              <div>
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <h3>{ele.name}</h3>
                <p>{ele.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
