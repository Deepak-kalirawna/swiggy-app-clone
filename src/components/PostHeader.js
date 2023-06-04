import React from "react";
import GrabOffer from "../assets/grab50off.webp";
import PizzaTreat from "../assets/pizzaTreats.webp";
import TopRatedRestau from "../assets/topRatedRestaurants.webp";
import BestSellers from "../assets/bestSellers.jpg";

const PostHeader = () => {
  return (
    <div className="flex justify-between items-center shadow-lg bg-slate-600 h-[20.5rem] p-3">
      <img
        className="w-64 h-72 hover:shadow-xl cursor-pointer hover:w-[17rem] rounded-md hover:h-80"
        src={GrabOffer}
        alt="food-image"
      />
      <img
        className="w-64 h-72 hover:shadow-xl cursor-pointer hover:w-[17rem] rounded-md hover:h-80"
        src={PizzaTreat}
        alt="food-image"
      />
      <img
        className="w-64 h-72 hover:shadow-xl cursor-pointer hover:w-[17rem] rounded-md hover:h-80"
        src={BestSellers}
        alt="food-image"
      />
      <img
        className="w-64 h-72 hover:shadow-xl cursor-pointer hover:w-[17rem] rounded-md hover:h-80"
        src={TopRatedRestau}
        alt="Restaurant-image"
      />
    </div>
  );
};

export default PostHeader;
