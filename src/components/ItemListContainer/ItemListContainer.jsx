import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { archive } from "../../data/ApiCall";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Spinner } from "react-bootstrap";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = categoryId ? archive.filter(prod => prod.category === categoryId) : archive
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetchProducts);
      }, 1000);
    });
    getData.then((res) => {
      setData(res)
      setLoading(false)
    });
  }, [categoryId]);

  return (
    <>{loading  
    ? <Container className="text-center"> <Spinner role="status" animation="border" variant="dark"><span>Cargando...</span></Spinner> </Container> 
    : <ItemList category={categoryId} data={data} />
    }
    </>
  );
}

export default ItemListContainer;
