import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { archive } from "../../data/ApiCall";
import ItemDetail from "../ItemDetail/ItemDetail"
import Container from 'react-bootstrap/Container';
import { Spinner } from "react-bootstrap";


const ItemDetailContainer = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState()

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        setItem(archive.find(itm => itm.id === Number(id)))
        setLoading(false)
      }, [1000])
    }
  }, [id])

  return (<>
    {loading ? <Container className="text-center"> <Spinner animation="border" variant="primary"><p>Cargando...</p></Spinner></Container> : <ItemDetail item={item} />}
  </>)
}

export default ItemDetailContainer

