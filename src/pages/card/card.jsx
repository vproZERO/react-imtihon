import { Button, Stack, Typography, Dialog } from "@mui/material";
import { Link } from "react-router-dom";
import { Strelka } from "../../assets/icons/strelka";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Trash } from "../../assets/icons/Trash";
import { Dollor } from "../../assets/icons/dollor";
import { incrimend, dicriment, del } from "../../store/product";
import {Breadcrumbs} from "@mui/material";
import React from "react";

export const Card = () => {
  const xarid = () => {
    console.log('salom');

  }
  const dispacht = useDispatch();
  const { products } = useSelector((state) => {
    return state.product;
  });
  let qiymat = 0;

  console.log(products);
  return (
    <>
      <Stack style={{ width: "1200px", margin: "0 auto" }}>
        <Stack
          style={{ padding: "110px", backgroundColor: "#F6F6F6" }}
          alignItems={"center"}
        >
          <Typography variant="h4" paddingBottom={"22px"}>
            <Link to="/card">Card</Link>
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
        <Typography padding={"50px 50px"} style={{ borderBottom:"2px solid gray" , marginBottom:"40px"}} variant="h4">
          Your cart items
        </Typography>
        <Stack>
          <table style={{ width: "100%" ,}}>
            <tr
              style={{
                padding: "10px 15px",
                direction: "row",
                justifyContent: "space-between",
                backgroundColor: "#5A5AC9",
              }}
            >
              <th>
                <Typography  color={"#fff"} variant="h6">
                  Product Image
                </Typography>
              </th>
              <th>
                <Typography color={"#fff"} variant="h6">
                  Product Name
                </Typography>
              </th>
              <th>
                <Typography color={"#fff"} variant="h6">
                  Product Caunt
                </Typography>
              </th>
              <th>
                <Typography color={"#fff"} variant="h6">
                  Product Price
                </Typography>
              </th>
              <th>
                <Typography color={"#fff"} variant="h6">
                  Delete Product
                </Typography>
              </th>
            </tr>
            {products?.map((item) => {
              {
                qiymat += item.price * item.count;
              }
              return (
                <tr key={item.id}>
                  <th style={{ padding: "30px 0" }}>
                    <div style={{ width: "350px",  height: "230px" }}>
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={item.img}
                        alt="img"
                      />
                    </div>
                  </th>
                  <th>
                    <p style={{ color:"#212529" , fontWeight:"400" , fontSize:"15px" , lineHeight:"26px", alignItems:"center"}}>{item.name}</p>
                  </th>
                  <th style={{display:"flex" , marginTop:"110px" , alignItems:"center" , gap:"20px"}}>
                    <Button style={{marginLeft:"20px"}}
                      onClick={() => dispacht(incrimend(item.id))}
                      variant="contained"
                    >
                      +
                    </Button>
                    <p>{item.count}</p>
                    <Button
                      onClick={() => dispacht(dicriment(item.id))}
                      variant="contained"
                    >
                      -
                    </Button>
                  </th>
                  <th>
                    <p>{item.price * item.count}$</p>
                  </th>

                  <th>
                    <Button onClick={() => dispacht(del(item.id))}>
                      <Trash />
                    </Button>
                  </th>
                </tr>
              );
            })}
          </table>
        </Stack>
        <Stack
          bgcolor={"#F6F6F6"}
          width={"526px"}
          height={"220px"}
          paddingTop={"50px"}
          marginTop={"50px"}
          marginBottom={"50px"}
          paddingBottom={"50px"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <div style={{display:"flex" , alignItems:"center" , justifyContent:"space-between" , width:"436px" , paddingBottom:"18px" , marginBottom:"18px" , borderBottom:"2px solid #DEE0E4"}}>
            <h4 style={{width:"67px" , fontWeight:"500" , fontSize:"15px" , lineHeight:"26px"}}>Product Shipping</h4>
            <h4 style={{width:"70px" , fontWeight:"400" , fontSize:"14px" , lineHeight:"24px" , color:"#565656"}}>Total Free Shipping</h4>
          </div>
          <div style={{display:"flex" , alignItems:"center" , justifyContent:"space-between" , width:"436px" , paddingBottom:"18px" , marginBottom:"18px" , borderBottom:"2px solid #DEE0E4"}}>
            <h4 style={{width:"67px" , fontWeight:"500" , fontSize:"15px" , lineHeight:"26px"}}>Total</h4>
            <h4 style={{width:"70px" , fontWeight:"600" , fontSize:"18px" , lineHeight:"28px" , color:" #5A5AC9"}}>{qiymat}$</h4>
          </div>
          <Button onClick={xarid} variant="contained">
            BUY
            <Dollor />

          </Button>
        </Stack>
        
      </Stack>
    </>
  );
};
