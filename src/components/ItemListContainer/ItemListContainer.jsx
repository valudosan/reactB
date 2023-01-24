import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { archive } from "../../ApiCall";

function ItemListContainer(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(archive);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>{props.title}</h1>

      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;
