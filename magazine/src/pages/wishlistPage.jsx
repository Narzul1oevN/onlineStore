import { IconButton } from "@mui/material";
import Radio from "../components/stars";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { PostToDo } from "../api/api";
import DeleteIcon from '@mui/icons-material/Delete';

const WishlistPage = () => {
  const { wishListMassiv } = useSelector((state) => state.ToDoSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleAddToCart(id) {
    const token = localStorage.getItem("token");
    if (token) {
      toast.success("Successfully add!");
      dispatch(PostToDo(id));
    } else {
      navigate("/logIn");
      toast.error("You didn't log or sign up in to your account!");
    }
  }
  return (
    <div className="w-[90%] m-auto flex flex-wrap gap-[20px]">
      {wishListMassiv?.length > 0 ? (
        wishListMassiv.map((element) => (
          <div
            className="w-[270px] h-[350px] flex flex-col items-start justify-center relative group"
            key={element.id}
          >
            <Link to={`/user/${element.id}`}>
              <img
                className="w-[270px] h-[150px] object-cover object-center"
                src={import.meta.env.VITE_APP_FILE_URL + element.image}
                alt=""
              />
            </Link>
            <h1 className="text-[18px] text-black font-[700] p-[10px]">
              {element.productName}
            </h1>
            <p className="font-[700] flex gap-[20px] text-[16px] p-[10px]">
              <span className="text-[#DB4444]">${element.price}</span>
              <span className="text-[lightgray] line-through">
                ${element.price + 20}
              </span>
            </p>
            <div className="w-full flex justify-between items-center">
              <Radio />
              <IconButton sx={{color:"red"}} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
            <button
              onClick={() => handleAddToCart(element.id)}
              className="w-[100%] h-[40px] text-center flex justify-center items-center shadow-lg opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-[12.5px] px-[30px] border-0 rounded-[10px] bg-[#000000] text-white font-bold transition-all duration-500 hover:bg-[#404040] hover:shadow-[0_0_20px_#6fc5ff80]  active:bg-[#adadad] active:transition-all active:duration-250 active:shadow-none"
            >
              Add To Cart
            </button>
          </div>
        ))
      ) : (
        <p className="w-full text-center pt-[50px] pb-[50px] font-[700] text-[24px]">Your wishlist is empty!</p>
      )}
    </div>
  );
};

export default WishlistPage;
