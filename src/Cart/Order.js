import React from "react";
import { Link } from "react-router-dom";
const Order = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-green-500 font-bold">
        Congratulations! Your order has been placed successfully.
      </h1>
      <Link to="/">
        <button className="text-[#8a2b06] bg-transparent cursor-pointer mb-6 border ml-[1rem] rounded-[10px] pr-[1.5rem] pl-[1.5rem] pt-[0.8rem] pb-[0.8rem] border-1 hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white">
          Close
        </button>
      </Link>
    </div>
  );
};

export default Order;
