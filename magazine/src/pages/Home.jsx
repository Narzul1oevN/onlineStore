import {
  Brands,
  Category,
  GetTodo,
  PostToDo,
  getProductById,
} from "../api/api";
import iphone114pro from "../assets/Frame 560.png";
import ip14pro from "../assets/Frame 561.png";
import Timer from "../components/Time";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Radio from "../components/stars";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import { Pagination } from "swiper/modules";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";
import DeleteIcon from '@mui/icons-material/Delete';

// Image
import icon1 from "../assets/Category-CellPhone.png";
import icon2 from "../assets/Category-Computer.png";
import icon3 from "../assets/Category-SmartWatch.png";
import icon4 from "../assets/Category-Camera.png";
import icon5 from "../assets/Category-Headphone.png";
import icon6 from "../assets/Category-Gamepad.png";
import JBL from "../assets/Frame 694.png";
import service1 from "../assets/Services.png";
import service2 from "../assets/Services (1).png";
import service3 from "../assets/Services (2).png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteToken } from "../utils/token";
import toast from "react-hot-toast";
import { axiosRequest } from "../utils/axiosRequest";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToWishList } from "../redusers/ToDoSlice";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.ToDoSlice);
  const { categoryGet } = useSelector((state) => state.ToDoSlice);
  const { getid } = useSelector((state) => state.ToDoSlice);
  const [showAll, setShowAll] = useState(false);

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

  const { wishListMassiv } = useSelector((state) => state.ToDoSlice);
  function handleWishList(element) {
    const token = localStorage.getItem("token");
    if (token) {
      toast.success("Successfully add!");
      // navigate("/wishlist");
    } else {
      navigate("/logIn");
      toast.error("You didn't log or sign up in to your account!");
    }
    dispatch(addToWishList(element));
  }

  useEffect(() => {
    dispatch(GetTodo());
    dispatch(Category());
  }, []);
  return (
    <div className="bg-[white]">
      {/* secion1 */}
      <div className="w-[100%] pt-[20px] pb-[20px] flex flex-wrap justify-center items-center gap-[20px]">
        <div className="sm:w-[100%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[13%] flex flex-wrap gap-[10px] sm:bg-none 2xl:bg-[#f0f0f0cd] p-[10px] rounded">
          {categoryGet?.length > 0 &&
            (showAll
              ? categoryGet.map((el) => (
                  <Link to={`/allProduct/${el.id}`}>
                    <div key={el.id}>
                      {" "}
                      <h1 className="text-[15px] hover:cursor-pointer">
                        {el?.categoryName}
                      </h1>
                    </div>
                  </Link>
                ))
              : categoryGet.slice(0, 6).map((el) => (
                  <Link to={`/allProduct/${el.id}`}>
                    <div key={el.id}>
                      <h1 className="hover:cursor-pointer sm:bg-[#f0f0f0cd] p-[2px] rounded text-[18px]">
                        {el?.categoryName}
                      </h1>
                    </div>
                  </Link>
                )))}
        </div>
        <img
          className="block sm:hidden md:hidder lg:block xl:block 2xl:block"
          src={iphone114pro}
          alt=""
        />
        <img
          className="hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden"
          src={ip14pro}
          alt=""
        />
      </div>

      {/* secion2 */}
      <div className="w-[100%] pt-[20px] pb-[20px] flex flex-col gap-[20px]">
        <div className="w-[80%] m-auto flex gap-[20px] items-center">
          <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
          <h1 className="text-[16px] text-[#DB4444] font-[700]">Today’s</h1>
        </div>
        <Timer />
        <div className="w-[100%] pt-[50px]  m-auto">
          <div className="w-[100%] m-auto flex flex-wrap gap-[20px]">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
              slidesPerView={4}
              spaceBetween={25}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                400: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                700: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
              }}
            >
              {data &&
                data?.data?.products.map((element) => {
                  return (
                    <SwiperSlide>
                      <div
                        className="w-[270px] h-[350px] flex flex-col items-start justify-center relative group"
                        key={element.id}
                      >
                        <Link to={`user/${element.id}`}>
                          <img
                            className="w-[270px] h-[150px] object-cover object-center"
                            src={
                              import.meta.env.VITE_APP_FILE_URL + element.image
                            }
                            alt=""
                          />
                        </Link>
                        <h1 className="text-[18px] text-black font-[700] p-[10px]">
                          {element.productName}
                        </h1>
                        <p className="font-[700] flex gap-[20px] text-[16px] p-[10px]">
                          <span className="text-[#DB4444]">
                            ${element.price}
                          </span>{" "}
                          <span className="text-[lightgray] line-through">
                            ${element.price + 20}
                          </span>
                        </p>
                        <Radio />
                        <IconButton  onClick={() => handleWishList(element)} className="absolute z-10 top-[-300px] left-[230px]" aria-label="delete" size="large">
                          <FavoriteBorderIcon className="text-[red]" />
                        </IconButton>
                        <button
                          onClick={() => handleAddToCart(element.id)}
                          className="w-[100%] h-[40px] text-center flex justify-center items-center shadow-lg opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-[12.5px] px-[30px] border-0 rounded-[10px] bg-[#000000] text-white font-bold transition-all duration-500 hover:bg-[#404040] hover:shadow-[0_0_20px_#6fc5ff80]  active:bg-[#adadad] active:transition-all active:duration-250 active:shadow-none "
                        >
                          Add To Cart
                        </button>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
        <div className="w-[80%] h-[2px] bg-[lightgray] m-auto"></div>
      </div>

      {/* secion3 */}
      <div className="w-[100%] pt-[20px] pb-[20px]">
        <div className="w-[80%] m-auto">
          <div className="w-[100%] m-auto flex gap-[20px] items-center">
            <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
            <h1 className="text-[16px] text-[#DB4444] font-[700]">
              Categories
            </h1>
          </div>

          <h1 h1 className="text-[36px] text-[black] font-[700]">
            Browse By Category
          </h1>

          <div className="w-[100%] flex flex-wrap gap-[20px] items-center justify-center pt-[30px] pb-[30px]">
            {categoryGet?.slice(0, 6)?.map((ellement) => {
              return (
                <Link to={`/allProduct/${ellement.id}`}>
                  <div className="group hover:bg-[#DB4444] border-[2px] border-[#91919170] w-[170px] h-[145px] flex flex-col justify-evenly items-center">
                    <img
                      className="w-[50px] h-[50px] rounded"
                      src={
                        import.meta.env.VITE_APP_FILE_URL +
                        ellement?.categoryImage
                      }
                      alt=""
                    />
                    <h1 className="text-[16px] text-center font-[100] group-hover:text-white">
                      {ellement?.categoryName}
                    </h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-[80%] h-[2px] bg-[lightgray] m-auto mt-[20px] mb-[20px]"></div>
      </div>

      {/* secion4 */}
      <div className="w-[100%] flex flex-col pt-[20px] pb-[20px]">
        <div className="w-[80%] m-auto">
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
            <button
              onClick={() => {
                navigate("/allProduct"),
                  toast.success("You have gone to the page All Products");
              }}
              className="w-[150px] h-[50px] text-[18px] text-white bg-[#DB4444] rounded-[10px] hover:bg-[#db4444a3]"
            >
              View All
            </button>
          </div>

          <div className="w-[100%] pt-[50px]  m-auto">
          <div className="w-[100%] m-auto flex flex-wrap gap-[20px]">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
              slidesPerView={4}
              spaceBetween={25}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                400: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                700: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
              }}
            >
              {data &&
                data?.data?.products.map((element) => {
                  return (
                    <SwiperSlide>
                      <div
                        className="w-[270px] h-[350px] flex flex-col items-start justify-center relative group"
                        key={element.id}
                      >
                        <Link to={`user/${element.id}`}>
                          <img
                            className="w-[270px] h-[150px] object-cover object-center"
                            src={
                              import.meta.env.VITE_APP_FILE_URL + element.image
                            }
                            alt=""
                          />
                        </Link>
                        <h1 className="text-[18px] text-black font-[700] p-[10px]">
                          {element.productName}
                        </h1>
                        <p className="font-[700] flex gap-[20px] text-[16px] p-[10px]">
                          <span className="text-[#DB4444]">
                            ${element.price}
                          </span>{" "}
                          <span className="text-[lightgray] line-through">
                            ${element.price + 20}
                          </span>
                        </p>
                        <Radio />
                        <IconButton  className="absolute z-10 top-[-300px] left-[200px]" aria-label="delete" size="large">
                          <FavoriteBorderIcon className="text-[red]" />
                        </IconButton>
                        <button
                          onClick={() => handleAddToCart(element.id)}
                          className="w-[100%] h-[40px] text-center flex justify-center items-center shadow-lg opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-[12.5px] px-[30px] border-0 rounded-[10px] bg-[#000000] text-white font-bold transition-all duration-500 hover:bg-[#404040] hover:shadow-[0_0_20px_#6fc5ff80]  active:bg-[#adadad] active:transition-all active:duration-250 active:shadow-none "
                        >
                          Add To Cart
                        </button>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
        </div>
      </div>

      {/* secion5 */}
      <div
        data-aos="fade-right"
        className="w-[100%]  justify-center items-center mt-[20px] mb-[20px]"
      >
        <div className="w-[80%] m-auto flex flex-wrap gap-[50px] items-center justify-center bg-black pt-[20px] pb-[20px] pl-[20px] pr-[20px]">
          <div className="flex flex-col gap-[20px] items-start">
            <h1 className="text-[#00FF66] text-[16px] font-[700]">
              Categories
            </h1>
            <h1 className="sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] 2xl:text-[48px] font-[800] text-white">
              Enhance Your <br /> Music Experience
            </h1>
            <div className="flex flex-wrap gap-[20px] items-center ">
              <div className="w-[62px] h-[62px] flex flex-col bg-[#FFFFFF] rounded-[50%]">
                <h1 className="text-[16px] font-[700] flex justify-center items-center text-center">
                  23 <br /> Hours
                </h1>
              </div>
              <div className="w-[62px] h-[62px] flex flex-col bg-[#FFFFFF] rounded-[50%]">
                <h1 className="text-[16px] font-[700] flex justify-center items-center text-center">
                  05 <br /> Days
                </h1>
              </div>
              <div className="w-[62px] h-[62px] flex flex-col bg-[#FFFFFF] rounded-[50%]">
                <h1 className="text-[16px] font-[700] flex justify-center items-center text-center">
                  59 <br /> Minutes
                </h1>
              </div>
              <div className="w-[62px] h-[62px] flex flex-col bg-[#FFFFFF] rounded-[50%]">
                <h1 className="text-[16px] font-[700] flex justify-center items-center text-center">
                  35 <br /> Seconds
                </h1>
              </div>
            </div>
            <button className="w-[170px] h-[50px] rounded-[10px] bg-[#00FF66] text-black text-[16px]">
              Buy Now!
            </button>
          </div>
          <img className="w-[]" src={JBL} alt="" />
        </div>
      </div>

      {/* secion6 */}
      <div className="w-[100%] flex flex-col pt-[20px] pb-[20px]">
        <div className="w-[80%] m-auto">
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
            <button
              onClick={() => {
                navigate("/allProduct"),
                  toast.success("You have gone to the page All Products");
              }}
              className="w-[150px] h-[50px] text-[18px] text-white bg-[#DB4444] rounded-[10px] hover:bg-[#db4444a3]"
            >
              View All
            </button>
          </div>

          <div className="w-[100%] flex flex-col items-center pt-[50px]  m-auto">
            <div className="w-[100%] m-auto flex flex-wrap gap-[20px]">
              {data &&
                data?.data?.products.slice(0, 4).map((element) => {
                  return (
                    <div
                      className="w-[270px] h-[350px] flex flex-col items-start justify-center"
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

            <button
              onClick={() => {
                navigate("/allProduct"),
                  toast.success("You have gone to the page All Products");
              }}
              className="w-[234px] h-[56px] bg-[#DB4444] rounded text-[18px] hover:bg-[#db4444a3] text-white"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>

      {/* secion7 */}
      <div className="w-[100%] m-auto flex flex-col pt-[50px] pb-[50px]">
        <div className="w-[80%] m-auto">
          <div className="w-[100%] m-auto flex gap-[20px] items-center">
            <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
            <h1 className="text-[16px] text-[#DB4444] font-[700]">Featured</h1>
          </div>
          <h1 className="text-[36px] text-[black] font-[700]">New Arrival</h1>
        </div>

        <div className="flex flex-wrap gap-8 justify-center items-start">
          <div className="flex overflow-hidden flex-col px-7 pt-24 bg-black rounded min-w-[240px] w-[600px] max-md:px-5 max-md:max-w-full">
            <div className="flex relative flex-col items-start px-1 pt-96 pb-8 min-h-[511px] max-md:pt-24 max-md:pr-5 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col max-w-full w-[242px]">
                <div className="flex flex-col w-full text-neutral-50">
                  <div className="text-2xl font-semibold tracking-wider leading-none">
                    PlayStation 5
                  </div>
                  <div className="mt-4 text-sm leading-5">
                    Black and White version of the PS5 coming out on sale.
                  </div>
                </div>
                <div className="flex flex-col mt-4 text-base font-medium text-white w-[81px]">
                  <div>Shop Now</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e40742fe053a27fd4ae0fe98d17023b98e0458d4b6c382de755fc8952018a510?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                    className="object-contain w-full aspect-[83.33]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center min-w-[240px] w-[700px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-col items-end px-14 max-w-full rounded bg-stone-950 w-[570px] max-md:pl-5">
              <div className="flex relative flex-col items-start pt-36 pb-6 w-full min-h-[284px] max-md:pt-24 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col max-w-full w-[255px]">
                  <div className="flex flex-col w-full text-neutral-50">
                    <div className="text-2xl font-semibold tracking-wider leading-none">
                      Women’s Collections
                    </div>
                    <div className="mt-4 text-sm leading-5">
                      Featured woman collections that give you another vibe.
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 text-base font-medium text-white w-[81px]">
                    <div>Shop Now</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e40742fe053a27fd4ae0fe98d17023b98e0458d4b6c382de755fc8952018a510?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain w-full aspect-[83.33]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 justify-center items-center mt-8 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-contain self-stretch my-auto aspect-[0.95] min-w-[240px] w-[270px]"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-contain self-stretch my-auto aspect-[0.95] min-w-[240px] w-[270px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] m-auto flex justify-center items-center pt-[50px] pb-[50px]">
        <div className="w-[80%] m-auto flex flex-wrap justify-center items-center gap-[20px]">
          <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
            <img src={service1} alt="" />
            <h1 className="text-[20px] text-black font-[700]">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-[14px]">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
            <img src={service2} alt="" />
            <h1 className="text-[20px] text-black font-[700]">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-[14px]">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
            <img src={service3} alt="" />
            <h1 className="text-[20px] text-black font-[700]">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-[14px]">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
