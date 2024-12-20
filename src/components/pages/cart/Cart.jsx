import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, resetCart, deleteById, getTotalAmount} = useContext(CartContext);

    let totalAmount = getTotalAmount()

  return (
    <div>
      {cart.map((elemento) => {
        return <div key={elemento.id} style={{border: "2px solid black"}}>
          <h2>{elemento.nombre}</h2>
          <h3>{elemento.categoria}</h3>
          <h3>{elemento.quantity}</h3>
          <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
        </div>;
      })}
      <h2>El total a pagar es {totalAmount}</h2>
      <button onClick={resetCart}>Limpiar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
