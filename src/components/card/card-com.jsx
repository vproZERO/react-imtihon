import React from "react";
import { Add } from "../../assets/icons/add";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../../store/product";
export const CardCom = ({ id, img, name, price , category}) => {
  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(add({ id, img, name, price , category }));
  };
  return (
    <div
      style={{
        width: "352px",
        height : "350px",
        padding: "10px",
        marginBottom:"80px",
        boxShadow: "0px 0px 11.83px 1.17px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div style={{ width: "330px", height: "200px" }}>
        <img
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={img}
          alt="sdsd"
        />
      </div>
      <p style={{ padding: "20px 0px" }}>{name}</p>
      <p>{category}</p>
      <div
        style={{
          alignItems: "baseline",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p style={{width:"70px" , padding:"20px 0" , fontWeight:"600" , fontSize:"18px" , lineHeight:"28px" , color:" #5A5AC9"}}>${price}</p>
        <p className="cardCom__button_text">
          <Button
            onClick={addProduct}
            style={{ borderRadius: "100px" }}
          >
            <Add />
          </Button>
        </p>
      </div>
    </div>
  );
};
