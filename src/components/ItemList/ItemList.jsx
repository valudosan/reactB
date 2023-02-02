import React from "react";
import Item from "../Item/Item";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Badge } from "react-bootstrap";

const ItemList = ({ data, category }) => {
  return (
    <Container className="text-center" fluid >
      <Badge bg="primary" className="my-5 px-5"> <h1 style={{ color: "white" }}>{category ? category.toUpperCase(0) : "Productos"}</h1></Badge>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        {data.map((archive) =>

          <Item key={archive.id} info={archive} />
        )};
      </Row>
    </Container>)
};

export default ItemList;
