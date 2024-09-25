import React, { useEffect, useState } from "react";
import Radio from "../components/stars";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosRequest } from "../utils/axiosRequest";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.ToDoSlice);
  const api = "http://135.181.152.249:8072/Product/get-product-by-id";
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  async function get(id) {
    try {
      const { data } = await axios.get(`${api}?id=${id}`);
      console.log(data.data.color);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addToCart(id) {
    try {
      const response = await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`);
      console.log(response)
      toast.success("Success!");
      navigate("/cart")
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get(id);
  }, []);
  
  return (
    <div className="w-[100%] ">
      <div className="w-[85%] m-auto flex flex-wrap gap-[20px] justify-evenly items-center pt-[50px] pb-[50px]">
        <img
          className="w-[40%] rounded-[10px]"
          src={user && import.meta.env.VITE_APP_FILE_URL + user.data.images[0].images}
          alt=""
        />
        <div className="flex flex-col gap-[10px] items-start">
          <h1 className="text-[24px] text-black">
            {user && user.data.productName}
          </h1>
          <div className="flex gap-[20px] items-center">
            <Radio />
            <h1
              className={
                user && user.data.hasDiscount
                  ? "text-green-900 w-[100px] text-center h-[30px] flex justify-center items-center bg-[#00ff0049] rounded-[5px]"
                  : "text-red-700 w-[100px] text-center h-[30px] flex justify-center items-center bg-[#ff000049] rounded-[5px]"
              }
            >
              {user && user.data.hasDiscount ? "in Stock" : "Out Stock"}
            </h1>
          </div>
          <h1 className="text-[24px] font-[700]">${user && user.data.price}</h1>
          <p className="sm:w-[300px] md:w-[320px] lg:w-[330px] xl:w-[350px] 2xl:w-[370px] text-[14px] text-[gray] text-start">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="w-[95%] h-[1px] bg-[gray] mt-[10px] mb-[10px] m-auto"></div>
          <div className="flex gap-[30px] items-center">
            <h1 className="text-[20px] text-black font-[700]">Color:</h1>
            <div className="w-[30px] h-[30px] rounded-[50%]" style={{ backgroundColor: user && user.data.color }}></div>
          </div>
          <div className="flex gap-[10px] items-center">
            <h1 className="text-[20px] text-black font-[700]">Size:</h1>
            <div className="flex gap-[20px] items-center">
              <div className="hover:text-[white] hover:border-none hover:bg-[#DB4444] w-[40px] h-[32px] border border-[black] flex justify-center items-center rounded ">
                <h1 className="text-[20px]">XS</h1>
              </div>

              <div className="hover:text-[white] hover:border-none hover:bg-[#DB4444] w-[40px] h-[32px] border border-[black] flex justify-center items-center rounded ">
                <h1 className="text-[20px]">S</h1>
              </div>

              <div className="hover:text-[white] hover:border-none hover:bg-[#DB4444] w-[40px] h-[32px] border border-[black] flex justify-center items-center rounded ">
                <h1 className="text-[20px]">M</h1>
              </div>

              <div className="hover:text-[white] hover:border-none hover:bg-[#DB4444] w-[40px] h-[32px] border border-[black] flex justify-center items-center rounded ">
                <h1 className="text-[20px]">L</h1>
              </div>
              <div className="hover:text-[white] hover:border-none hover:bg-[#DB4444] w-[40px] h-[32px] border border-[black] flex justify-center items-center rounded ">
                <h1 className="text-[20px]">XL</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <button className="hover:border-none hover:bg-[#DB4444] hover:text-[white] w-[40px] h-[40px] border rounded text-center text-[20px] border-black">
              -
            </button>
            <h1 className="hover:border-none hover:bg-[#DB4444] hover:text-[white] w-[40px] h-[40px] flex justify-center items-center border rounded text-center text-[20px] border-black">
              2
            </h1>
            <button className="hover:border-none hover:bg-[#DB4444] hover:text-[white] w-[40px] h-[40px] border rounded text-center text-[20px] border-black">
              +
            </button>
            <button onClick={() =>addToCart(user && user.data.id)} className=" bg-[#DB4444] text-[white] w-[165px] h-[44px] rounded text-center text-[20px]">
              Buy Now
            </button>
          </div>
          <div className="w-[400px] h-[168px] border border-gray-300">
            <div className="flex items-center p-4 border-b border-gray-300">
              <div className="w-10 h-10 mr-4">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/delivery.png"
                  alt="Delivery Icon"
                />
              </div>

              <div>
                <h2 className="font-bold text-lg">Free Delivery</h2>
                <p className="text-sm">
                  <a href="#" className="underline">
                    Enter your postal code
                  </a>{" "}
                  for Delivery Availability
                </p>
              </div>
            </div>

            <div className="flex items-center p-4">
              <div className="w-10 h-10 mr-4">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/return-purchase.png"
                  alt="Return Icon"
                />
              </div>

              <div>
                <h2 className="font-bold text-lg">Return Delivery</h2>
                <p className="text-sm">
                  Free 30 Days Delivery Returns.{" "}
                  <a href="#" className="underline">
                    Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[70%] m-auto flex flex-col pt-[20px] pb-[20px]">
        <div className="w-[100%] m-auto">
          <div className="w-[100%] m-auto flex gap-[20px] items-center">
            <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
            <h1 className="text-[16px] text-[#DB4444] font-[700]">
              Categories
            </h1>
          </div>

          <div className="w-[100%] flex flex-wrap sm:justify-center md:justify-center lg:justify-between xl:justify-between 2xl:justify-between items-center justify-between">
            <h1 className="text-[36px] text-[black] font-[700]">
              Browse By Category
            </h1>
            <button className="w-[150px] h-[50px] text-[18px] text-white bg-[#DB4444] rounded-[10px]">
              View All
            </button>
          </div>

          <div className="w-[100%] flex flex-col items-center pt-[50px]  m-auto">
            <div className="w-[100%] m-auto flex flex-wrap justify-center gap-[15px]">
              {data &&
                data?.data?.products.slice(4, 8).map((element) => {
                  return (
                    <div
                      className="w-[250px] h-[350px] flex flex-col items-start justify-center"
                      key={element.id}
                    >
                      <img
                        className="w-[270px] h-[150px] object-cover object-center"
                        src={import.meta.env.VITE_APP_FILE_URL + element.image}
                        alt=""
                      />
                      <h1 className="text-[18px] text-black font-[700] p-[10px]">
                        {element.productName}
                      </h1>
                      <p className="font-[700] flex gap-[20px] text-[16px] p-[10px]">
                        <span className="text-[#DB4444]">${element.price}</span>{" "}
                        <span className="text-[lightgray] line-through">
                          ${element.price + 20}
                        </span>
                      </p>
                      <Radio />
                    </div>
                  );
                })}
            </div>
            <Link to="/allProduct">
              <button className="w-[234px] h-[56px] bg-[#DB4444] rounded text-[18px] text-white">View All Products</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleProduct;
