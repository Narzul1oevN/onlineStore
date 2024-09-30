import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";


export const GetTodo = createAsyncThunk("counter/GetTodo", async () => {
    try {
      const { data } = await axiosRequest.get("/Product/get-products");
      return data;
    } catch (error) {
      console.error(error);
    }
});

export const Category = createAsyncThunk("counter/Category", async () => {
  try {
    const { data } = await axiosRequest.get("/Category/get-categories")
    return data.data
  } catch (error) {
    console.error(error);
  }
})

export const getProductById = createAsyncThunk("counter/getProductById", async ( id ) => {
  try {
    const { data } = await axiosRequest.get(`/Category/get-category-by-id?id=${id}`)
    return data.data
  } catch (error) {
    console.error(error);
  }
})

export const Brands = createAsyncThunk("counter/Brands", async () => {
  try {
    const { data } = await axiosRequest.get("/Brand/get-brands")
    return data.data
  } catch (error) {
    console.error(error);
  }
})

export const Color = createAsyncThunk("counter/Color", async () => {
  try {
    const { data } = await axiosRequest.get("/Color/get-colors")
    return data.data
  } catch (error) {
    console.error(error);
  }
})

export const get2 = createAsyncThunk("counter/get2", async () => {
  try {
    const { data } = await axiosRequest.get("/Cart/get-products-from-cart")
    return data.data[0].productsInCart;
  } catch (error) {
    console.error(error);
  }
})

export const DeleteTodo = createAsyncThunk(
  "counter/DeleteTodo",
  async (id, { dispatch }) => {
    try {
      const { data } = await axiosRequest.delete( `/Cart/delete-product-from-cart?id=${id}`);
      dispatch(get2());
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const DeleteAll = createAsyncThunk("counter/DeleteAll", async ( _, {dispatch}) => {
    try {
      const { data } = await axiosRequest.delete(`/Cart/clear-cart`);
      dispatch(get2());
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const PostToDo = createAsyncThunk(
  "counter/PostToDo",
  async (id, { dispatch }) => {
    try {
      const { data } = await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`);
      dispatch(get2());
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axiosRequest.post("/Account/Login", credentials);
    if (data.statusCode === 200) {
      return data.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    toast.error("Error logging in");
    return rejectWithValue(error.response.data);
  }
});

export const plusQuantity = createAsyncThunk( 
  "counter/plusQuantity", async ( id, {dispatch}) => {
  try {
    const { data } = await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`)
    dispatch(get2());
    toast.success("Successfully added!")
    return data
  } catch (error) {
    console.error(error);
    toast.error("Failed to add!")
  }
})

export const minusQuantity = createAsyncThunk( 
  "counter/minusQuantity", async ( id, {dispatch}) => {
  try {
    const { data } = await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`)
    dispatch(get2());
    toast.success("Successfully removed!")
    return data
  } catch (error) {
    console.error(error);
    toast.error("Failed to remove!")
  }
})

export const searchByName = createAsyncThunk("counter/searchByName", async (search, {dispatch}) => {
  try {
    const { data } = await axiosRequest.get(`/Product/get-products?ProductName=${search}`)
    return data
  } catch (error) {
    console.error(error);
  }
})

export const filtrByBrands = createAsyncThunk("counter/filtrByBrands", async (id) => {
  try {
    const { data } = await axiosRequest.get(`/Product/get-products?BrandId=${id}`)
    return data
  } catch (error) {
    console.error(error);
  }
})

export const filtrByColor = createAsyncThunk("counter/filtrByColor", async (id) => {
  try {
    const { data } = await axiosRequest.get(`/Product/get-products?ColorId=${id}`)
    return data
  } catch (error) {
    console.error(error);
  }
})

export const filtrByPrice = createAsyncThunk("counter/filtrByPrice", async ({minPrice, maxPrice}) => {
  try {
    const { data } = await axiosRequest.get(`/Product/get-products?MinPrice=${minPrice}&MaxPrice=${maxPrice}`)
    return data
  } catch (error) {
    console.error(error);
  }
})

// 989005757