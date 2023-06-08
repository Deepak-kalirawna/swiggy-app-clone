import React, { useState } from "react";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { filterData } from "../utils/FilterData";
import NoResultFound from "../assets/result-not-found-.png";
import { Link } from "react-router-dom";
import PostHeader from "./PostHeader";
const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    // console.log(data);

    setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(data?.data?.cards[2]?.data?.data?.cards);
  }
  const handleSearch = () => {
    const data = filterData(searchText, allRestaurants);
    if (data.length) {
      setFilterRestaurants(data);
      setSearching(true);
    } else {
      setSearching(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  return (
    <div>
      <PostHeader />
      <div className="mt-[2rem]">
        <TextField
          className="w-1/4 rounded border-2 shadow-xl border-gray-300"
          placeholder="search resturants"
          onKeyDown={handleKeyDown}
          variant="outlined"
          size="small"
          color="warning"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Button
          className="text-white text-xs px-2 py-2 font-bold capitalize bg-orange-400 ml-2 mt-1 shadow-xl  rounded border-2 border-gray-300 hover:bg-orange-600"
          variant="outlined"
          size="small"
          color="primary"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      {/* <div className="grid grid-cols-2 gap-2 px-4 md:grid md:grid-cols-4 md:gap-4 mt-[2rem] justify-items-center w-[100%vw]"> */}
      <div className="flex w-full flex-wrap space-x-14 space-y-12">
        <div></div>
        {searching ? (
          filterRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.data?.id}
                key={restaurant.data.id}
                className="text-black no-underline"
              >
                <RestaurantCard
                  key={restaurant.data.id}
                  restaurant={restaurant.data}
                />
              </Link>
            );
          })
        ) : (
          <div>
            <img
              classname="w-[50%vw] mx-auto"
              src={NoResultFound}
              alt="NO RESULT FOUND"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
