import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export const CardItem = ({ item }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.RutaImagen} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
       {item.detalle}
        </Card.Text>
        <Button variant="success">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};
