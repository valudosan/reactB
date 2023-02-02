import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const ItemCount = ({ inicial, stock, onAdd }) => {
    const [contador, setContador] = useState(inicial)

    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => inicial < contador && setContador(contador - 1)
    return (
        <>
        <Container className="mt-3" style={{ display: "flex", justifyContent: "center" }}>
            <Button className="mx-4" style={{ width: "2.5rem", fontSize: "1rem" }} onClick={restar}>-</Button>
                <h3>{contador}</h3>
            <Button className="mx-4" style={{ width: "2.5rem", fontSize: "1rem" }} onClick={sumar}>+</Button>
        </Container>
        <Container>
            <Button disabled={contador === 0} className='my-3'variant="primary" style={{width:"100%"}}><Link style={{color: "white"}} to="/carrito">Agregar al Carrito</Link></Button>
        </Container>
        </>
    )
}

export default ItemCount