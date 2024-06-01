import React from "react";
import StarIcon from "@mui/icons-material/StarRate";
import RestaurantImg from "../assets/resturant-img.png";

const RestaurantCard = (props) => {
  return (
    <div className="w-72 hover:shadow-2xl cursor-pointer">
      <img
        className="hover:shadow-2xl rounded w-72 "
        src={RestaurantImg}
        alt="foodimage"
      />
      <h3 className="mb-1 ">{props.restaurant.name}</h3>
      <span className=" text-sm">{props.restaurant.cuisines.join(", ")}</span>
      <div className="text-sm font-semibold pt-2 pb-2 ">
        <span className="bg-green-600 text-white pr-1 pt-1 pb-1">
          {" "}
          <StarIcon className="w-[10px] h-[10px] pl-1 " />{" "}
          {props.restaurant.avgRating}{" "}
        </span>{" "}
        <span className="mr-3 ml-3">{props.restaurant.slaString}</span>
        <span>{props.restaurant.costForTwoString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
