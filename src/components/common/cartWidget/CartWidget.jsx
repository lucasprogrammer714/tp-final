import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../../context/CartContext";


const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <div className="widget">
      <FaCartShopping size={25} />
      {getTotalItems() !== 0 &&  <p>{getTotalItems()}</p>}
    </div>
  );
};

export default CartWidget;