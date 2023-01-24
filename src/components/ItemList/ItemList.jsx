import React from "react";
import { archive } from "../../ApiCall";
import Item from "../Item/Item";

const ItemList = ({ data = [] }) => {
  return data.map((archive) => <Item key={archive.id} info={archive} />);
};

export default ItemList;
