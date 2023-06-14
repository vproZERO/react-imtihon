import { Button } from "@mui/material";
import "./style.css";
import React, { useEffect, useRef } from "react";
const BASE_URL = "http://localhost:3001/products";
export const Post = () => {
  const productName = useRef();
  const productPrice = useRef();
  const productImg = useRef();
  const productCategory = useRef();
  const postSubmit = (evt) => {
    evt.preventDefault();
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: productName.current.value,
        price: productPrice.current.value,
        img: productImg.current.value,
        category: productCategory.current.value,
      }),
    });
    productName.current.value = "";
    productCategory.current.value = "";
    productImg.current.value = "";
    productPrice.current.value = "";
  };

  return (
    <div className="container">
      <div className="divBlock">
        <h1 style={{ paddingBottom: "55px" }}>Create new product</h1>
        <form
          style={{ width: "1200px", display: "flex", position: "relative" }}
          className="form"
          onSubmit={postSubmit}
        >
          <div style={{ display: "flex", gap: "20px", margin: "0 auto" }}>
            <input
              style={{
                width: "565px",
                borderRadius: "0",
                border: "2px solid #CED4DA",
              }}
              type="text"
              className="input"
              ref={productName}
              name="name"
              placeholder="Enter product name"
              required
            />
            <input
              style={{
                width: "565px",
                borderRadius: "0",
                border: "2px solid #CED4DA",
              }}
              type="text"
              className="input"
              ref={productPrice}
              name="price"
              placeholder="Enter product price"
              required
            />
          </div>
          <div style={{ display: "flex", gap: "20px", margin: "0 auto" }}>
            <input
              style={{
                width: "565px",
                paddingBottom: "87px",
                borderRadius: "0",
                border: "2px solid #CED4DA",
              }}
              type="text"
              className="input"
              ref={productImg}
              name="img"
              placeholder="Enter product img"
              required
            />
            <div style={{ width:"565px"}}>
              <input
                style={{
                  marginBottom:"32px",
                  width: "565px",
                  borderRadius: "0",
                  border: "2px solid #CED4DA",
                }}
                type="text"
                className="input"
                ref={productCategory}
                name="category"
                placeholder="Enter product category"
                required
              />
              <button className="postBtn" type="submit">
                <h3>Post</h3>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
