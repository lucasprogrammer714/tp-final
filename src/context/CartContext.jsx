import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])



  const addToCart = (product) => {
    
    let isInCart = cart.some((el) => el.id === product.id); 

    if (isInCart) {


      let newProductsArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      }); 

      setCart(newProductsArray);
    } else {
  
      setCart([...cart, product]);
    }
  };




    const resetCart = () => {
      setCart([]);
    };

    const deleteById = ( id ) => {
     let itemsRemoved =  cart.filter( elemento => elemento.id !== id)
      setCart(itemsRemoved)
    };

    const getTotalAmount = () => {
         let total =  cart.reduce( (acc, elemento)=>{
            return acc + ( elemento.precio * elemento.quantity);
          }, 0);

          return total;

    }

    const getTotalItems = () => {
      return cart.reduce((acc, elemento) => acc + elemento.quantity, 0);
    };



let data = {addToCart, cart, deleteById, resetCart, getTotalAmount, getTotalItems }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
