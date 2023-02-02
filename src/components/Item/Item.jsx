import React from "react";
import "../Item/Item.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const Item = ({ info }) => {
  return (
    <Card style={{ width: '22rem', margin: "1rem" }}>
      <Card.Title className="text-center m-1" style={{fontSize: "1.5rem", height: "4rem"}}>{info.title}</Card.Title>
        <div style={{display: "flex", justifyContent:"center"}}>
          <Card.Img style={{ width: '15rem', height: "15rem" }} src={info.image} alt={info.title} />
        </div>
        <Card.Body>
          <Card.Title className="text-center">Precio: $ {info.price}</Card.Title>
        </Card.Body>

      <Button variant="primary"><Link style={{color: "white"}} to={`/producto/${info.id}`}>Ver en Detalle</Link></Button>
    </Card>
  );
};

export default Item;
