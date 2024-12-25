import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./cardItem.css"; // Asegúrate de importar tu archivo CSS

export const CardItem = ({ item }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={item.rutaImagen} className="card-img-top" />
      <Card.Body>
        <Card.Title className="card-title">{item.nombre}</Card.Title>
        <Card.Text className="card-text">{item.proveedor}</Card.Text>
        <Card.Text className="card-text price">${item.precio}</Card.Text>
        <div className="card-button">
          <Link to={`/detail/${item.id}`}>Ver detalle</Link>
        </div>
      </Card.Body>
    </Card>
  );
};
