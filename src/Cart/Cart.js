import CartContext from "../utils/CartContext";
import React, { useContext } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  console.log("cart items :", cartCtx.items);
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className="list-none m-0 p-0 overflow-auto min-w-[40rem] max-w-[60rem] max-h-[30rem]">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.name}
          amount={item.amount}
          price={item.price / 100 || item.defaultPrice / 100}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <div className="flex flex-col items-center">
      {cartItems}
      <div className="flex justify-between items-center font-bold min-w-[40rem] max-w-[60rem] text-[1.5rem] mt-[1rem] mb-[1rem]">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right max-w-[60rem] min-w-[40rem]">
        <Link to="/">
          <button className="text-[#8a2b06] bg-transparent cursor-pointer mb-6 border ml-[1rem] rounded-[10px] pr-[1.5rem] pl-[1.5rem] pt-[0.8rem] pb-[0.8rem] border-1 hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white">
            Close
          </button>
        </Link>
        {hasItems && (
          <Link to="/order">
            <button className="bg-[#8a2b06] cursor-pointer mb-6 border ml-[1rem] rounded-[10px] pr-[1.5rem] pl-[1.5rem] pt-[0.8rem] pb-[0.8rem] border-1 text-white hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white">
              Order
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Cart;
