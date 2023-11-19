/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import { OpenCartContext } from "../context/OpenCartContext";
import CartList from "./CartList";

const CartBody = () => {
  const { cartArray, total, deleteProduct } = useContext(CartContext);
  const { handleCloseCart } = useContext(OpenCartContext);

  return (
    <div id="idCart" className="cart">
      <h2>Tus compras</h2>
      <ul id="cartList" className="listCart">
        {cartArray.map((product, id) => (
          <CartList
            item={product.item}
            cantidad={product.quantity}
            onDelete={deleteProduct}
            key={id}
          />
        ))}
      </ul>

      <div className="checkout">
        <div id="totalSum" className="total">
          {total.toFixed(2)}
        </div>
        <div
          id="closeShopping"
          className="btn btn-danger"
          onClick={() => handleCloseCart()}
        >
          Close
        </div>
        <Link
          to={"/checkout"}
          id="endBuy"
          className="shopping"
          onClick={() => handleCloseCart()}
        >
          Finaliza tu Compra
        </Link>
      </div>
    </div>
  );
};

export default CartBody;
