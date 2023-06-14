import React from "react";
const BASE_URL = "http://localhost:3001/products";
import { useRef } from "react";

export const Del = () => {
  const deleteId = useRef();
  const deleteData = (evt) => {
    evt.preventDefault();
    fetch(`${BASE_URL}/${deleteId.current.value}`, {
      method: "DELETE",
    });
    deleteId.current.value = "";
  };
  return (
    <div  style={{marginBottom:"65px"}} className="divBlock">
      <h1 style={{paddingBottom:"15px"}}>Delete Product</h1>
      <p style={{paddingBottom:"55px" , marginLeft:"25px"}}>To delete an element write it's ID</p>
      <form style={{ width: "1200px", marginLeft:"25px" , display: "flex", position: "relative" }} className="form" onSubmit={deleteData}>
        
        <input
        style={{
          width: "565px",
          marginBottom:"15px",
          borderRadius: "0",
          border: "2px solid #CED4DA",
        }}
          className="input"
          name="id"
          ref={deleteId}
          type="text"
          placeholder="Enter the if product to be deleted"
          required
        />
        <button style={{width:"165px"}} className="postBtn" type="submit">
          <h3>Delete</h3>
        </button>
      </form>
    </div>
  );
};
