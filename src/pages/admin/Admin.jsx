import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Strelka } from "../../assets/icons/strelka";
import { Post } from "./components/post";
import { Updata } from "./components/updata";
import { Del } from "./components/del";
import {Breadcrumbs} from "@mui/material";
import React from "react";

export const Admin = () => {
  return (
    <Stack style={{ width: "1200px", margin: "0 auto" }}>
      <Stack
        style={{ padding: "110px", backgroundColor: "#F6F6F6" }}
        alignItems={"center"}
      >
        <Typography variant="h4" paddingBottom={"22px"}>
          <Link to="/admin">Admin Panel</Link>
        </Typography>
        <Breadcrumbs>
        <Typography paddingTop={"22px"} variant="p">
          <Link to="/">Home</Link>
        </Typography>
        <Typography variant="p">
          <Link to="/card">
            <p>Card Page</p>
          </Link>
        </Typography>
        <Typography variant="p">
          <Link to="/admin">
            <p>Admin Panel</p>
          </Link>
        </Typography>
        </Breadcrumbs>
        
      </Stack>
      <Post />
      <Updata />
      <Del />
    </Stack>
  );
};
