import React, { useContext, useState } from "react";
import CartContext from "../utils/CartContext";
import { FOODITEM_IMG_URL } from "../utils/UrlData";
import { Button } from "@mui/material";
import { Rating } from "@mui/material";
const ItemCard = ({ foodItem }) => {
  const [addbtn, setAddBtn] = useState(false);
  const cartCtx = useContext(CartContext);

  const onClickHandlerAddItem = (foodItem) => {
    setAddBtn(true);
    cartCtx.addItem({ ...foodItem.card.info, amount: 1 });
  };
  return (
    <>
      <div className="flex justify-between items-center border-b-2 p-3">
        <div>
          <h2 className="text-lg font-bold">{foodItem.card.info.name}</h2>
          <p className="font-semibold">
            ₹{" "}
            {foodItem.card.info.price / 100 ||
              foodItem.card.info.defaultPrice / 100}
          </p>
          <p className="font-semibold">
            {foodItem.card.info.ratings.aggregatedRating.rating ? (
              <span className="flex space-x-2 justify-center">
                <Rating
                  value={Number(
                    foodItem.card.info.ratings.aggregatedRating.rating
                  )}
                  precision={0.1}
                />
                <span className="text-yellow-300 font-bold pt-1">
                  {foodItem.card.info.ratings.aggregatedRating.rating}
                </span>
                <span className="pt-1">
                  (
                  {foodItem.card.info.ratings.aggregatedRating.ratingCountV2
                    ? foodItem.card.info.ratings.aggregatedRating.ratingCountV2
                    : 50}
                  )
                </span>
              </span>
            ) : (
              <Rating value={4} precision={0.1} />
            )}
          </p>
        </div>
        <div className="flex flex-col items-center w-60 h-13 space-y-2 ">
          {foodItem?.card?.info?.imageId && (
            <img
              className="rounded-2xl object-contain"
              src={FOODITEM_IMG_URL + foodItem?.card?.info?.imageId}
              alt="foodimage"
            />
          )}

          <Button
            className="capitalize"
            variant="contained"
            color="success"
            size="large"
            sx={{
              width: "8rem",
            }}
            onClick={() => onClickHandlerAddItem(foodItem)}
          >
            {!addbtn ? "Add" : "Added +"}
          </Button>
        </div>
      </div>
      <hr className=" border-gray-60" />
    </>
  );
};

export default ItemCard;
