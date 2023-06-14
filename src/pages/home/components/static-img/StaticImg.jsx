import React from "react";
import { Grid } from "@mui/material";
import staticimg1 from "../../../../assets/imgs/staticImg.jpg"
import staticimg2 from "../../../../assets/imgs/staticImg5.jpg"
import staticimg3 from "../../../../assets/imgs/staticImg5.jpg"

export const StaticImg = () => {
  return (
    <div className="container static__container">
      <div className="static__img img1">
        <img
          style={{ width: "100%", height:"100%" , objectFit: "cover" }}
          src={staticimg1}
          alt="img1"
        />
      </div>
      <div className="static__img img2">
        <img
          style={{ width: "100%", objectFit: "cover" }}
          src={staticimg2}
          alt="img2"
        />
      </div>
      <div className="static__img img3">
        <img
          style={{ width: "100%", objectFit: "cover" }}
          src={staticimg3}
          alt="img3"
        />
      </div>
    </div>
  );
};
