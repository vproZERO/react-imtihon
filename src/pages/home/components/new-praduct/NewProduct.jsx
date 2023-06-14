import React from "react";
import { Text } from "../../../../components/text/Text";
import { CardCom } from "../../../../components/card/card-com";
import { Button } from "@mui/material";

export const NewProduct = () => {
  const arrText = [
    {
      title: "New Arrival products",
      subTitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.",
    },
  ];
  const arrCard = [
    {
      img: "https://static01.nyt.com/images/2022/04/29/business/28wheels/28wheels-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      name: "SportCar",
      price: 809,
    },
    {
      img: "https://cdn.luxury-items.org/2912908/7_fastest_cars_in_the_world_supercars_top_speed_2021_updated_8.jpg.webp",
      name: "HyperCar",
      price: 1023,
    },
    {
      img: "https://www.usnews.com/object/image/00000182-a537-dc41-a1db-a57f46460000/1_2021_bugatti_chiron_super_sport.jpg?update-time=&size=responsive640",
      name: "Bugatti",
      price: 788,
    },
    {
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/BE5A/production/_123303784_gettyimages-524191066.jpg",
      name: "Porsche",
      price: 690,
    },
    {
      img: "https://cdn.luxury-items.org/2912908/7_fastest_cars_in_the_world_supercars_top_speed_2021_updated_3.jpg.webp",
      name: "SportCar",
      price: 809,
    },
    {
      img: "https://cdn.luxury-items.org/2912908/7_fastest_cars_in_the_world_supercars_top_speed_2021_updated_2.jpg.webp",
      name: "HyperCar",
      price: 1323,
    },
  ];
  return (
    <div style={{ paddingTop: "80px" }}>
      {arrText.map((item, index) => (
        <Text key={index} {...item} />
      ))}

      <div className="container"
        style={{
          width: "1200px",
          display: "flex",
          flexWrap:"wrap",
          paddingTop: "60px",
          gap: "70px",
        }}
      >
        {arrCard.map((item, index) => (
          <CardCom key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
