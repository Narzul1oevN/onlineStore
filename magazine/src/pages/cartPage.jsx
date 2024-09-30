import React, { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { axiosRequest } from "../utils/axiosRequest";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import toast from "react-hot-toast";
import {
  DeleteAll,
  DeleteTodo,
  get2,
  minusQuantity,
  plusQuantity,
} from "../api/api";
import { data } from "autoprefixer";

const CartPage = () => {
  const { cartData } = useSelector((state) => state.ToDoSlice);
  let [prices, setPrices] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get2());
  }, [dispatch]);

  useEffect(() => {
    if (cartData?.length > 0) {
      const total = cartData.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);
      setPrices(total);
    }
  }, [cartData]);

  return (
    <div className="w-[100%]">
      <div className="w-[80%] m-auto items-center justify-center mt-[50px] mb-[50px]">
        <div className="w-[70%] m-auto flex justify-around">
          <h1 className="text-[16px]">Product</h1>
          <h1 className="text-[16px]">Price</h1>
          <h1 className="text-[16px]">Quantity</h1>
          <h1 className="text-[16px]">Subtotal</h1>
        </div>
        <div className="flex flex-col gap-[10px]">
          {cartData &&
            cartData.map((elem) => {
              return (
                <div
                  key={elem.id}
                  className="w-[100%] pt-[10px] pb-[10px] m-auto flex justify-between items-center border-[1px] border-[solid] rounded border-[#a7a7a7]"
                >
                  <div className="w-[35%] flex flex-wrap gap-[20px] items-center justify-evenly ">
                    <div className="flex flex-wrap m-auto justify-evenly items-center gap-[20px] ">
                      <img
                        className="w-[54px] h-[54px] object-cover"
                        src={
                          elem &&
                          import.meta.env.VITE_APP_FILE_URL + elem.product.image
                        }
                      />
                      <h1 className="text-[16px]">
                        {elem.product.productName.slice(0, 6)}
                      </h1>
                    </div>
                    <h1 className="text-[16px]">{elem.product.price} $</h1>
                  </div>
                  <div className="w-[30%] m-auto flex flex-wrap gap-[10px] justify-between items-center">
                    <div className="flex items-center gap-[10px]">
                      <input
                        type="text"
                        className="p-[10px] w-[40px] h-[44px] outline-none border-[2px] rounded"
                        value={elem.quantity}
                      />
                      <div className="flex flex-col gap-[5px] items-center justify-center">
                        <button
                          onClick={() => dispatch(plusQuantity(elem.id))}
                          className="w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white font-[700] text-[15px] rounded-[50%]"
                        >
                          +
                        </button>
                        <button
                          onClick={() => dispatch(minusQuantity(elem.id))}
                          className="w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white font-[700] text-[15px] rounded-[50%]"
                        >
                          -
                        </button>
                      </div>
                    </div>

                    <h1 className="text-[16px] font-[800]">
                      {elem.product.price * elem.quantity} $
                    </h1>
                  </div>
                  <IconButton
                    onClick={() => dispatch(DeleteTodo(elem.id))}
                    aria-label="delete"
                    size="large"
                  >
                    <CancelIcon sx={{ color: "red" }} />
                  </IconButton>
                </div>
              );
            })}
        </div>

        <div className="w-[100%] pt-[30px] pb-[30px] flex items-center justify-between m-auto">
          <button className="w-[210px] h-[56px] border-[2px] border-black text-black font-[700] rounded hover:bg-black hover:text-white">
            Return To Shop
          </button>
          <div className="flex flex-wrap gap-[30px] items-center">
            <button className="w-[210px] h-[56px] border-[2px] border-black text-black font-[700] rounded hover:bg-black hover:text-white">
              Update Cart
            </button>
            <button
              onClick={() => dispatch(DeleteAll())}
              className="w-[210px] h-[56px] border-[2px] border-red-600 text-red-600 font-[700] rounded hover:bg-red-600 hover:text-white"
            >
              Remove all
            </button>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <div className="flex overflow-hidden flex-col items-center px-6 py-5 rounded border-2 border-black border-solid min-w-[240px] w-[468px] max-md:px-5 max-md:max-w-full">
            <div className="self-stretch text-xl font-medium leading-snug text-black max-md:max-w-full">
              Cart Total
            </div>
            <div className="flex gap-10 items-start mt-5 text-base text-black whitespace-nowrap max-md:max-w-full">
              <div>Subtotal:</div>
              <div>${prices}</div>
            </div>
            <div className="flex gap-10 items-start mt-5 text-base text-black whitespace-nowrap max-md:max-w-full">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <div className="flex flex-col mt-5 max-w-full rotate-[8.742277657347563e-8rad] w-[422px]">
              <div className="z-10 shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full" />
            </div>
            <div className="flex gap-10 justify-between items-start mt-5 max-w-full text-xl font-semibold leading-tight text-black whitespace-nowrap w-[424px]">
              <div>Total:</div>
              <div>${prices}</div>
            </div>
            <div className="gap-2.5 self-stretch px-12 py-4 mt-5 text-base font-medium bg-red-500 rounded text-neutral-50 max-md:px-5">
              Procees to checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
