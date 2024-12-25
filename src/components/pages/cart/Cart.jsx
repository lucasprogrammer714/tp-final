import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, resetCart, deleteById, getTotalAmount } =
    useContext(CartContext);

  let totalAmount = getTotalAmount();

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <div className="items-cart-container">
              <img src={elemento.rutaImagen} alt={elemento.nombre} />
              <div>
                <h2>{elemento.nombre}</h2>
                <h3>Cantidad: </h3>
                <h3>{elemento.quantity}</h3>
              </div>
            </div>
            <button onClick={() => deleteById(elemento.id)} className="delete-style-button">Eliminar</button>
          </div>
        );
      })}

      {totalAmount !== 0 && <h2>El total a pagar es ${totalAmount}</h2>}

      <div className="buttons-container">
        <button onClick={resetCart} className="button-cart">
          Limpiar carrito
        </button>
        <Link to="/checkout" className="button-cart">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
