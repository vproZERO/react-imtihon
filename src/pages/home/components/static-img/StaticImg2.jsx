import React from "react";
import { Grid } from "@mui/material";
import staticimg1 from "../../../../assets/imgs/staticImg.jpg"
import staticimg2 from "../../../../assets/imgs/staticImg5.jpg"
import staticimg3 from "../../../../assets/imgs/staticImg5.jpg"
import img1 from "../../../../assets/imgs/static-img-1.svg";
import img2 from "../../../../assets/imgs/static-img-2.svg";

export const StaticImg2 = () => {
  return (
    <Grid maxWidth={"1200px"} m={"0 auto"} container spacing={4}>
      <Grid width={"290px"} item>
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src={staticimg3}
          alt="img1"
        />
      </Grid>
      <Grid width={"290px"} item>
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src={staticimg2}
          alt="img2"
        />
      </Grid>
      <Grid width={"580px"} item>
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src={staticimg1}
          alt="img3"
        />
      </Grid>
    </Grid>
  );
};
