import React from "react";
import logo from "../../assets/imgs/logo.svg";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  Meta,
  Twiter,
  YouTobe,
  Insta,
  Call,
  SearchIcon,
  Shuffile,
  Favarite,
  Bag,
} from "../../assets/icons/icon";
import { Link } from "react-router-dom";
export const Header = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <>
      <Stack
        alignItems={"center"}
        paddingTop={"15px"}
        paddingBottom={"15px"}
        sx={{ bgcolor: "#000" }}
      >
        <Stack
          direction={"row"}
          style={{ justifyContent: "space-between" }}
          width={"1200px"}
          margin={"0 auto"}
        >
          <Stack direction={"row"} gap={"25px"}>
            <Meta />
            <Twiter />
            <YouTobe />
            <Insta />
            <Call />
            <Typography color={"#fff"} variant="p">
              (+91) 143-03-77
            </Typography>
          </Stack>
          <Stack paddingLeft={"200px"} gap={"25px"} direction={"row"}>
            <Typography color={"#fff"} variant="p">
              Setting
            </Typography>
            <Typography color={"#fff"} variant="p">
              USD $
            </Typography>
            <Typography color={"#fff"} variant="p">
              English
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        paddingTop={"20px"}
        direction={"row"}
        maxWidth={"1200px"}
        margin={"0 auto"}
        justifyContent={"space-between"}
      >
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <Stack color={"#111111"} direction={"row"} gap={"50px"}>
          <Link to="/">Home</Link>
          <Link to="/card">Card</Link>
          <Link to="/admin">Admin Page</Link>
        </Stack>
        <Stack direction={"row"} gap={"40px"}>
          <SearchIcon />
          <Shuffile />
          <Stack style={{ position: "relative" }}>
            <Favarite />
            <span
              style={{
                position: "absolute",
                right:"-10px",
                top:"-10px",
                backgroundColor: "#5A5AC9",
                padding: "2px 5px",
                borderRadius: "10px",
                color: "#fff",
              }}
            >
              {products.length}
            </span>
          </Stack>
          <Link to="/card">
            <Stack style={{ position: "relative" }}>
              <Bag />
              <span
                style={{
                  position: "absolute",
                  right:"-10px",
                  top:"-10px",
                  backgroundColor: "#5A5AC9",
                  padding: "2px 5px",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              >
                {products.length}
              </span>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};
