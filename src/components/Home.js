import React, { useState } from "react";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { filterData } from "../utils/FilterData";
import NoResultFound from "../assets/result-not-found-.png";
import { Link } from "react-router-dom";
import PostHeader from "./PostHeader";
import Footer from "./Footer";
import { Skeleton, Box } from "@mui/material";
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0573992&lng=77.560509&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const data = await response.json();
    // console.log( "data from swiggy", data?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants );
    // setAllRestaurants(data?.data?.cards);
    // setFilterRestaurants(data?.data?.cards);

    setAllRestaurants(
      data?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setFilterRestaurants(
      data?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
  }
  const handleSearch = () => {
    const data = filterData(searchText, allRestaurants);
    if (data?.length) {
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
  const debounce = function (fn, d) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, d);
    };
  };
  const searchFunction = debounce(handleSearch, 300);
  if (filterRestaurants?.length === 0) {
    return (
      <>
        <Skeleton
          className=" w-[90%] px-4 py-4 pt-9 pb-9 m-10"
          variant="rectangular"
          height={118}
        />
        <div className="flex w-full flex-wrap space-x-14 space-y-12">
          <div></div>
          <div className="w-72">
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </div>
          <div className="w-72">
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </div>
          <div className="w-72">
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </div>
          <div className="w-72">
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </div>
          <div className="w-72">
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </div>
          <div className="w-72">
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </div>
          <div className="w-72">
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </div>
          <div className="w-72">
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </div>
        </div>
      </>
    );
  }
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
          onKeyUp={searchFunction()}
        >
          Search
        </Button>
      </div>
      {/* <div className="grid grid-cols-2 gap-2 px-4 md:grid md:grid-cols-4 md:gap-4 mt-[2rem] justify-items-center w-[100%vw]"> */}
      <div className="flex w-full flex-wrap space-x-14 space-y-12">
        <div></div>
        {/* {!filterRestaurants ? <h1>filterRestaurants !!!! Not there</h1>:""} */}
        {searching ? (
          filterRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant.info.id}
                className="text-black no-underline"
              >
                <RestaurantCard
                  key={restaurant.info.id}
                  restaurant={restaurant.info}
                />
              </Link>
            );
          })
        ) : (
          <div>
            <img
              className="w-[50%vw] mx-auto"
              src={NoResultFound}
              alt="NO RESULT FOUND"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
