import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <div>
        <FaCartShopping size={25}/>
        <h3>{cart.lenght}</h3>
    </div>
  );
};

export default CartWidget;
