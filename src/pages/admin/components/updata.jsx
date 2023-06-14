import React from "react";
import { Button } from "@mui/material";
import "./style.css";
import { useEffect, useRef } from "react";
const BASE_URL = "http://localhost:3001/products";
export const Updata = () => {
  const productName = useRef();
  const productPrice = useRef();
  const productImg = useRef();
  const productCategory = useRef();
  const postSubmit = useRef()
  return (
    <div>
      <div className="divBlock">
        <h1 style={{ paddingBottom: "55px" }}>Update new product</h1>
        <form  style={{ width: "1200px", display: "flex", position: "relative" }} className="form" onSubmit={postSubmit}>
          <div  style={{ display: "flex", gap: "20px", margin: "0 auto" }}>
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
          <div  style={{ display: "flex", gap: "20px", margin: "0 auto" }}>
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
