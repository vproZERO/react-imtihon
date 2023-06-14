import React from "react";
import { Text } from "../../../../components/text/Text";
export const Blog = () => {
  const arrText = [
    {
      title: "From Our Latest Blogs",
      subTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="container" style={{ width: "1200px", margin: "0 auto" , marginBottom:"65px" }}>
      <div style={{ paddingTop: "100px", paddingBottom: "50px" }}>
        {arrText.map((item, index) => (
          <Text key={index} {...item} />
        ))}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <div style={{ width: "290px",height:"220px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src="https://vip-cars.com.ua/wp-content/uploads/2016/12/image005-146.jpg"
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
        <div>
          <div style={{ width: "290px",height:"220px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src="https://epicvin.com/storage/3ZRCTyI3XL.webp"
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
        <div>
          <div style={{ width: "290px", height:"220px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src="https://images.drive.ru/i/0/5e5e3e39ec05c45626000038"
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
        <div>
          <div style={{ width: "290px",height:"220px", paddingBottom: "20px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src="https://i.pinimg.com/originals/4d/3a/7d/4d3a7d1e8e5f706a0d373b378a111f91.jpg"
              alt="dsds"
            />
          </div>
          <h5
            style={{
              textTransform: "uppercase",
              color: "#5A5AC9",
              paddingBottom: "15px",
            }}
          >
            Fashion
          </h5>
          <h4 style={{ fontSize: "bold", paddingBottom: "15px" }}>
            This is first Post For Blog
          </h4>
          <p style={{ color: "#565656", paddingBottom: "15px" }}>
            Posted by
            <span style={{ color: "#5A5AC9" }}>HasTech</span>
            12TH Nov 2023
          </p>
        </div>
      </div>
    </div>
  );
};
