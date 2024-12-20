import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const CardItem = ({ item }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.rutaImagen} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>{item.proveedor}</Card.Text>
        <Card.Text>${item.precio}</Card.Text>
        <Link to={`/detail/${item.id}`}>Ver detalle</Link>
      </Card.Body>
    </Card>
  );
};
