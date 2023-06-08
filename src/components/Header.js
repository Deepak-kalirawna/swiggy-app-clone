import React, { useContext } from "react";
import AppLogo from "../assets/Swiggy-img.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Person } from "@mui/icons-material";
import DiscountIcon from "@mui/icons-material/Discount";
import { Link } from "react-router-dom";
import CartContext from "../utils/CartContext";
const Header = () => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <div className=" bg-white flex justify-between items-center shadow-lg">
      <Link to="/" className="logo">
        <img className="w-20 p-4 cursor-pointer" src={AppLogo} alt="app-logo" />
      </Link>
      <h1 className="text-gray-600 text-lg hidden md:block">
        <span className="text-orange-400 mr-3">Browse</span> Order
        <span className="text-orange-400 ml-3">Enjoy!</span>
      </h1>
      <nav className="flex justify-between space-x-4 font-bold ">
        <Link
          to="/"
          className=" hover:text-orange-400 text-black flex items-center cursor-pointer no-underline "
        >
          <DiscountIcon className="mr-1" />
          Offers
        </Link>

        <Link
          to="/cart"
          className="mr-10 flex items-center text-black no-underline hover:text-orange-400 cursor-pointer"
        >
          <Badge
            badgeContent={numberOfCartItems}
            // anchorOrigin={{
            //   vertical: "top",
            //   horizontal: "left",
            // }}
            color="warning"
          >
            <ShoppingCartIcon />{" "}
          </Badge>
          <span className="ml-3">Cart</span>
        </Link>
        <div className="flex items-center  hover:text-orange-400 cursor-pointer">
          <Person />
          <span className="ml-1 mr-5">Deepak</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
