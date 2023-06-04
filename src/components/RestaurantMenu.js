import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import StarIcon from "@mui/icons-material/StarRate";
import Menu from "./Menu";
const RestaurantMenu = () => {
  const params = useParams();
  const restaurant = useRestaurantMenu(params.restaurantId);
  //console.log(restaurant);
  const itemCards = restaurant?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  console.log("itemsCard: resstarant menu", itemCards);
  const basicInfo = restaurant?.cards[0]?.card?.card?.info;
  return !restaurant ? (
    <h1>{params.restaurantId}</h1>
  ) : (
    <div>
      <div className="flex justify-around px-4 py-4 pt-9 pb-9 border-solid border-b-2 items-center">
        <div className="">
          <h1 className="font-bold text-2xl">{basicInfo.name}</h1>

          <p className="text-sm">{basicInfo.cuisines.join(", ")}</p>
          <p className="text-sm font-semibold">
            {basicInfo.areaName}, {basicInfo.sla.lastMileTravel} m
          </p>
        </div>
        <div>
          <span className="bg-green-600 text-white pr-1 pt-1 pb-1">
            <StarIcon className="w-[10px] h-[10px] pl-1 " />
            {basicInfo.avgRating}
          </span>
        </div>
      </div>
      <div className="px-4 py-4 pt-9 pb-9">
        <h1 className="text-2xl font-bold ">Menu</h1>
        <div>
          {itemCards.map((item) => (
            <>
              <Menu Menu={item}></Menu>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
