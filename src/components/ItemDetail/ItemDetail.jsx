import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {

    return (
        <Container style={{marginTop:"4rem"}}>
            <Card style={{ width: '60rem', margin: "1rem" }}>
                <Card.Title className="text-center m-3" style={{ fontSize: "2rem" }}>{item.title}</Card.Title>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card.Img style={{ width: '30rem', height: "30rem" }} src={item.imageD} alt={item.title} />
                    <Card.Body>
                        <Card.Title className="text-center">Descripción</Card.Title>
                        {item.category === "liquidos" ? <ListGroup className="list-group-flush">
                            <ListGroup.Item>Concentración: {item.description.Concentracion}</ListGroup.Item>
                            <ListGroup.Item>Sabor: {item.description.Sabor}</ListGroup.Item>
                            <ListGroup.Item>Volumen: {item.description.Volumen}</ListGroup.Item>
                            <ListGroup.Item>Certificación: Anmat</ListGroup.Item>
                            <Card.Title className="mt-5 text-center">Precio: $ {item.price}</Card.Title>
                        </ListGroup> :
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Nicotina: {item.description.Nicotina}</ListGroup.Item>
                                <ListGroup.Item>Bateria: {item.description.Bateria}</ListGroup.Item>
                                <ListGroup.Item>Soplos: {item.description.Nicotina}</ListGroup.Item>
                                <ListGroup.Item>Capacidad: {item.description.Capacidad}</ListGroup.Item>
                                <Card.Title className="mt-5 text-center">Precio: $ {item.price}</Card.Title>
                            </ListGroup>
                        }

                    </Card.Body>
                </div>
                <ItemCount inicial={0} stock={item.stock} onAdd={() => { alert("Compraste") }} />
            </Card>
        </Container>
    )
}

export default ItemDetail