import React, { useState } from "react";
import logo from "../assets/Group 1116606595.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import TemporaryDrawer from "../components/drawer";
import frame from "../assets/Frame 741.png";
import { deleteToken } from "../utils/token";
import { IconButton, Popover } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { cnt } = useSelector((state) => state.ToDoSlice);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function handlecardOpenpage() {
    if (token) {
      navigate("/cart");
      toast.success("Success!");
    } else {
      navigate("/login");
      toast.error("Please log in or sign in to access this page!");
    }
  }

  return (
    <div className="w-[100%]">
      <div className="w-[80%] m-auto flex flex-wrap gap-[10px] justify-between items-center">
        <TemporaryDrawer />
        <img
          onClick={() => navigate("/")}
          className="sm:hidden md:hidden lg:block xl:block 2xl:block hover:cursor-pointer"
          src={logo}
          alt=""
        />

        <div className="flex gap-[20px]">
          <Link
            className="flex sm:hidden md:hidden lg:hidden xl:block 2xl:block  item-center"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="flex sm:hidden md:hidden lg:hidden xl:block 2xl:block  item-center"
            to={"contact"}
          >
            Contact
          </Link>
          <Link
            className="flex sm:hidden md:hidden lg:hidden xl:block 2xl:block  item-center"
            to={"aboutus"}
          >
            About Us
          </Link>
          <Link
            className="flex sm:hidden md:hidden lg:hidden xl:block 2xl:block  item-center"
            to={"signUp"}
          >
            Sign Up
          </Link>
        </div>

        <div className="flex flex-wrap gap-[20px] justify-center items-center">
          <div className="p-[5px] flex gap-[10px] items-center bg-[#dfdfdf] rounded">
            <input
              className="rounded outline-none p-[2px] w-[200px] pl-[20px] text-[14px]"
              placeholder="What are you looking for?"
              type="text"
              name=""
              id=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a36546edd30f9649053810fdbf6c98d92541e863e7b8b10ab13af855343b34e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/850597cc14d3bfef027aa097fc5bca3ac1b650d683dc1d3c8c0134d5cd9a061d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="block sm:hidden md:hidden lg:block xl:block 2xl:block object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <Link to={"/cart"}>
            <h1 className="absolute w-[20px] h-[20px] flex justify-center items-center top-1 text-white p-[5px] bg-red-600 rounded-full font-[500]">
              {cnt}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>

          <div className="block sm:hidden md:hidden lg:block xl:block 2xl:block">
            <IconButton onClick={handleClick}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/505a01368e57ac667ecd551fd161eb3fa8202cee72841e5b11d9f712055e4607?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="block sm:hidden md:hidden lg:block xl:block 2xl:block object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <div className="flex flex-col p-4 bg-black text-white">
                <Button
                  startIcon={<AccountBoxIcon />}
                  onClick={() => {
                    handleClose();
                  }}
                  style={{ justifyContent: "flex-start", color: "white" }}
                >
                  Account
                </Button>
                <Button
                  startIcon={<FavoriteIcon />}
                  onClick={() => {
                    handleClose();
                    navigate("/wishlist")
                  }}
                  style={{ justifyContent: "flex-start", color: "white" }}
                >
                  Wishlist
                </Button>
                <Button
                  startIcon={<LogoutIcon />}
                  onClick={() => {
                    deleteToken(), handleClose();
                  }}
                  style={{ justifyContent: "flex-start", color: "white" }}
                >
                  Logout
                </Button>
              </div>
            </Popover>
          </div>
        </div>
      </div>
      <Outlet />
      <div className="w-[100%] flex flex-wrap gap-[20px] m-auto bg-[black] pt-[30px] pb-[30px]">
        <div className="w-[80%] m-auto flex flex-wrap gap-[40px] justify-center items-start">
          <div className="flex flex-col gap-[10px] items-start">
            <h1 className="text-[24px] text-[white] font-[700]">Exclusive</h1>
            <h1 className="text-[20px] text-[white] font-[600]">Subscribe</h1>
            <h1 className="text-[16px] text-[white]">
              Get 10% off your first order
            </h1>
            <input
              placeholder="Enter your email"
              type="text"
              className=" p-[5px] pl-[5px] bg-transparent border-[1px] border-[solid] border-[white] rounded"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col gap-[10px] items-start">
            <h1 className="text-[20px] text-[white] font-[600]">Support</h1>
            <p className="w-[175px] text-[16px] text-[#FAFAFA]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="w-[175px] text-[16px] text-[#FAFAFA]">
              exclusive@gmail.com
            </p>
            <p className="w-[175px] text-[16px] text-[#FAFAFA]">
              +88015-88888-9999
            </p>
          </div>
          <div className="flex flex-col gap-[10px] items-start">
            <h1 className="text-[20px] text-[white] font-[600]">Account</h1>
            <p className="w-[175px] text-[16px] text-[#FAFAFA]">My Account</p>
            <p onClick={() => navigate("/cart")} className="w-[175px] text-[16px] text-[#FAFAFA]">Cart</p>
            <p className="w-[175px] text-[16px] text-[#FAFAFA]">Wishlist</p>
            <p className="w-[175px] text-[16px] text-[#FAFAFA]">Shop</p>
          </div>
          <div className="flex flex-col gap-[10px] items-start">
            <h1 className="text-[20px] text-[white] font-[600]">Quick Link</h1>
            <p className="w-[175px] text-[16px] text-[#FAFAFA]">
              Privacy Policy
            </p>
            <p className="w-[175px] text-[16px] text-[#FAFAFA]">Terms Of Use</p>
            <p className="w-[175px] text-[16px] text-[#FAFAFA]">FAQ</p>
            <p className="w-[175px] text-[16px] text-[#FAFAFA]">Contact</p>
          </div>
          <div className="flex flex-col gap-[10px] items-start">
            <h1 className="text-[20px] text-[white] font-[600]">Social </h1>
            <img src={frame} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
