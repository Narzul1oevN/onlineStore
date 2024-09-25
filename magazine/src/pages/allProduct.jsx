import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Brands,
  Category,
  Color,
  GetTodo,
  PostToDo,
  filtrByBrands,
  filtrByColor,
  filtrByPrice,
  getProductById,
  searchByName,
} from "../api/api";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Radio from "../components/stars";
import toast from "react-hot-toast";

function valuetext(value) {
  return `${value}°C`;
}

const AllProduct = () => {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [showAllBrand, setshowAllBrand] = useState(false);
  const [showAllFeatures, setshowAllFeatures] = useState(false);
  const { categoryGet } = useSelector((state) => state.ToDoSlice);
  const { brands } = useSelector((state) => state.ToDoSlice);
  const { color } = useSelector((state) => state.ToDoSlice);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.ToDoSlice);
  const { id } = useParams();
  const { getid } = useSelector((state) => state.ToDoSlice);
  const [ minPrice, setminPrice ] = useState(null);
  const [ maxPrice, setmaxPrice ] = useState(null);

  useEffect(() => {
    dispatch(Category());
    dispatch(Color());
    dispatch(Brands());
    dispatch(GetTodo());
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const [value, setValue] = React.useState([1000, 1007]);

  const handleChange = (event, newValue) => {
    console.log(event.target.value[0]);
    setValue(newValue);
    dispatch(
      filtrByPrice({
        minPrice: event.target.value[0],
        maxPrice: event.target.value[1],
      })
    );
  };

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
    <div className="w-[100%]">
      {id && (
        <div className="w-[98%] p-[20px] m-auto bg-[#DB4444] rounded-[10px] pt-[30px] pb-[30px] flex flex-wrap gap-[20px] items-center justify-center">
          <img
            className="rounded w-[150px]"
            src={
              getid && import.meta.env.VITE_APP_FILE_URL + getid.categoryImage
            }
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-white sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[42px] 2xl:text-[44px] font-[700]">
              {getid?.categoryName}
            </h1>
            <div className="flex flex-wrap gap-[10px] items-center">
              {getid?.subCategories?.map((elem) => {
                return <p className="text-[white]">{elem?.subCategoryName}</p>;
              })}
            </div>
          </div>
        </div>
      )}

      <div className="w-[100%] flex flex-wrap gap-[10px] items-start justify-start">
        <div className="sm:w-[89%] md:w-[68%] lg:w-[50%] xl:w-[35%] 2xl:w-[29%] flex flex-col gap-[20px] pt-[20px] pb-[20px] bg-[#e8e8e8] p-[20px]">
          <div className=" flex flex-col items-start gap-[5px]">
            <h1 className="text-[24px] font-[800]">Category</h1>
            {categoryGet?.length > 0 &&
              (showAll
                ? categoryGet?.map(
                    (el) =>
                      el?.categoryName && (
                        <Link to={`/allProduct/${el.id}`} key={el.id}>
                          <div>
                            <h1 className="text-[17px] hover:cursor-pointer">
                              {el?.categoryName}
                            </h1>
                          </div>
                        </Link>
                      )
                  )
                : categoryGet.slice(0, 5).map(
                    (el) =>
                      el?.categoryName && (
                        <Link to={`/allProduct/${el.id}`} key={el.id}>
                          <div>
                            <h1 className="text-[17px] hover:cursor-pointer">
                              {el?.categoryName}
                            </h1>
                          </div>
                        </Link>
                      )
                  ))}

            <button
              onClick={() => setShowAll(!showAll)}
              className="text-red-500 text-[17px]"
            >
              {showAll ? "Hide" : "See All"}
            </button>
          </div>
          <div className=" flex flex-col gap-[5px] items-start">
            <h1 className="text-[16px] font-[800]">Brands</h1>
            {brands?.length > 0 &&
              (showAllBrand
                ? brands.map((el) => (
                    <div
                      onClick={() => dispatch(filtrByBrands(el.id))}
                      key={el.id}
                      className="flex items-center gap-[10px]"
                    >
                      <input value={el.id} type="checkbox" clas name="" id="" />
                      <h1 className="text-[17px] hover:cursor-pointer">
                        {el.brandName}
                      </h1>
                    </div>
                  ))
                : brands.slice(0, 5).map((el) => (
                    <div
                      onClick={() => dispatch(filtrByBrands(el.id))}
                      key={el.id}
                    >
                      <h1 className="text-[17px] hover:cursor-pointer">
                        {el.brandName}
                      </h1>
                    </div>
                  )))}
            <button
              onClick={() => setshowAllBrand(!showAllBrand)}
              className="text-red-500 text-[17px]"
            >
              {showAllBrand ? "Hide" : "See All"}
            </button>
          </div>
          <div className="flex flex-col gap-[5px] items-start">
            <h1 className="text-[16px] font-[800]">Features</h1>
            {color?.length > 0 &&
              (showAllFeatures
                ? color.map((el) => (
                    <div
                      onClick={() => dispatch(filtrByColor(el.id))}
                      key={el.id}
                      className="flex items-center gap-[10px]"
                    >
                      <input value={el.id} type="checkbox" clas name="" id="" />
                      <h1 className="text-[17px] hover:cursor-pointer">
                        {el.colorName}
                      </h1>
                    </div>
                  ))
                : color.slice(5, 11).map((el) => (
                    <div
                      onClick={() => dispatch(filtrByColor(el.id))}
                      key={el.id}
                    >
                      <h1 className="text-[17px] hover:cursor-pointer">
                        {el.colorName}
                      </h1>
                    </div>
                  )))}
            <button
              onClick={() => setshowAllFeatures(!showAllFeatures)}
              className="text-red-500"
            >
              {showAllFeatures ? "Hide" : "See All"}
            </button>
          </div>
          <div className="flex flex-col gap-[5px] items-start justify-center">
            <h1 className="text-[16px] font-[800]">Price range</h1>
            <Box sx={{ width: "100%" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={100}
                max={15000}
              />
            </Box>
            <div className="flex flex-wrap items-center justify-center gap-[10px]">
              {/* <input
                value={minPrice}
                placeholder="0"
                className="sm:w-[50px]  h-[30px] pl-[10px] outline-none rounded"
                type="number"
                name=""
                id=""
              />
              <input
                value={maxPrice}
                placeholder="9999"
                className="sm:w-[50px]  h-[30px] pl-[10px] outline-none rounded"
                type="number"
                name=""
                id=""
              /> */}
            </div>
            <button className="w-[80%] m-auto mt-[20px] h-[40px] bg-transparent rounded border-[3px] border-[solid] border-[#DB4444] text-[#DB4444] font-[700] hover:bg-[#DB4444] hover:text-white">
              Apply
            </button>
          </div>
          <div className="flex flex-col gap-[5px] items-start">
            <h1 className="text-[16px] font-[800]">Condition</h1>
            <div className="flex items-center gap-[10px]">
              <input type="radio" />
              <h1 className="text-[18px]">Any</h1>
            </div>

            <div className="flex items-center gap-[10px]">
              <input type="radio" />
              <h1 className="text-[18px]">Refurbished</h1>
            </div>

            <div className="flex items-center gap-[10px]">
              <input type="radio" />
              <h1 className="text-[18px]">Brand new</h1>
            </div>

            <div className="flex items-center gap-[10px]">
              <input type="radio" />
              <h1 className="text-[18px]">Old items</h1>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] items-start">
            <h1 className="text-[16px] font-[800]">Ratings</h1>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" />
              <Rating name="size-medium" defaultValue={2} />
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" />
              <Rating name="size-medium" defaultValue={2} />
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" />
              <Rating name="size-medium" defaultValue={2} />
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" />
              <Rating name="size-medium" defaultValue={2} />
            </div>
          </div>
        </div>

        <div className="w-[69%] pt-[50px] flex flex-col gap-[20px] ">
          <input
            value={search}
            onChange={(e) => {
              dispatch(searchByName(e.target.value)), setSearch(e.target.value);
            }}
            type="search"
            className="w-[250px] h-[35px] pl-[10px] pr-[10px] outline-none rounded"
            placeholder="Search by name..."
          />
          <div className="w-[100%] m-auto flex flex-wrap gap-[40px]">
            {data &&
              data?.data?.products.map((element) => {
                return (
                  <div
                    className="bg-white rounded w-[270px] h-[350px] flex flex-col items-start justify-start relative group"
                    key={element.id}
                  >
                    <Link to={`/user/${element.id}`}>
                      <img
                        className="rounded-tl-[10px] rounded-tr-[10px] w-[270px] h-[150px] object-cover object-center"
                        src={import.meta.env.VITE_APP_FILE_URL + element.image}
                      />
                    </Link>
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
                    <button
                      onClick={() => handleAddToCart(element.id)}
                      className="w-[100%] h-[40px] text-center flex justify-center items-center shadow-lg opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-[12.5px] px-[30px] border-0 rounded-[10px] bg-[#000000] text-white font-bold transition-all duration-500 hover:bg-[#404040] hover:shadow-[0_0_20px_#6fc5ff80]  active:bg-[#adadad] active:transition-all active:duration-250 active:shadow-none "
                    >
                      Add To Cart
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
