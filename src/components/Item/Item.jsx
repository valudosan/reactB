import React from "react";
import { archive } from "../../ApiCall";
import "../Item/Item.css";

const Item = ({ info }) => {
  return (
    <div className="item_container bg-primary">
      <div className="item_css ">
        <img className="img_css" src={info.image} alt={info.title} />
        <h3>{info.title}</h3>
        <p>"{info.description}"</p>
        <p> $ {info.price}</p>
      </div>
    </div>
  );
};

export default Item;
