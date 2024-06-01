import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import StarIcon from "@mui/icons-material/StarRate";
import Menu from "./Menu";
import Skeleton from "@mui/material/Skeleton";
import RestaurantImg from "../assets/resturant-img.png";
const RestaurantMenu = () => {
  const params = useParams();
  const restaurant = useRestaurantMenu(params.restaurantId);
  const itemCards = restaurant?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

  const basicInfo = restaurant?.cards[2]?.card?.card?.info;
  return !restaurant ? (
    <div className="flex flex-col items-center space-y-10">
      <Skeleton
        className=" w-[80%] px-4 py-4 pt-9 pb-9"
        variant="rectangular"
        height={118}
      />
      <Skeleton className=" w-[60%]" />
      <Skeleton className=" w-[60%]" />
      <Skeleton className=" w-[60%]" />
      <Skeleton className=" w-[60%]" />
      <Skeleton className=" w-[60%]" />
      <Skeleton className=" w-[60%]" />
      <Skeleton className=" w-[60%]" />
    </div>
  ) : (
    <div className="bg-slate-100 flex flex-col items-center pt-10">
      <div className="flex justify-around px-4 py-4 pt-9 pb-9 border-solid border-b-2 items-center w-[90%] bg-white">
        <div className="">
          <h1 className="font-bold text-2xl">{basicInfo?.name}</h1>

          <p className="text-sm">{basicInfo?.cuisines.join(", ")}</p>
          <p className="text-sm font-semibold">
            {basicInfo?.areaName}, {basicInfo?.sla.lastMileTravel} m
          </p>
        </div>
        <div>
          <img
            className="hover:shadow-2xl rounded w-72 "
            src={RestaurantImg}
            alt="foodimage"
          />
          {/* <span className="bg-green-600 text-white pr-1 pt-1 pb-1">
            <StarIcon className="w-[10px] h-[10px] pl-1 " />
            {basicInfo?.avgRating}
          </span> */}
        </div>
      </div>
      <div className="px-4 py-4 pt-9 pb-9 w-[40rem] ">
        <h1 className="text-2xl font-bold ">Menu</h1>
        <div className="space-y-2">
          {itemCards.map((item, index) => (
            <>
              <Menu key={index} Menu={item}></Menu>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
