import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Brands, Category, Color, GetTodo, filtrByBrands, filtrByColor, filtrByPrice, get2, getProductById, searchByName } from '../api/api';
import { axiosRequest } from '../utils/axiosRequest';
import toast from 'react-hot-toast';


export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axiosRequest.post('/Account/Login', credentials);
    if (data.statusCode === 200) {
      return data.data; 
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    toast.error('Error logging in');
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  data: [],
  cartData: [],
  token: null,
  loading: false,
  error: null,
  cnt: 0,
  categoryGet: [],
  color: [],
  brands: [],
  getid: {},
  wishListMassiv: []
};

export const ToDoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
    addToWishList: (state, action) => {
      const item = action.payload;
      const exists = state.wishListMassiv.find((el) => el.id === item.id);
      if (!exists) {
        state.wishListMassiv.push(item);
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(GetTodo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(get2.fulfilled, (state, action) => {
      state.cartData = action.payload;
      state.cnt = action.payload.length;
    });
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload; 
        localStorage.setItem('token', action.payload);
        toast.success('Successfully logged in!');
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder.addCase(Category.fulfilled, (state, action) => {
      state.categoryGet = action.payload;
    })
    builder.addCase(Brands.fulfilled, (state, action) => {
      state.brands = action.payload;
    })
    builder.addCase(Color.fulfilled, (state, action) => {
      state.color = action.payload;
    })
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.getid = action.payload;
    })
    builder.addCase(searchByName.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    builder.addCase(filtrByBrands.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    builder.addCase(filtrByColor.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    builder.addCase(filtrByPrice.fulfilled, (state, action) => {
      state.data = action.payload;
    })

  },
});

export const { logout, addToWishList } = ToDoSlice.actions;


export default ToDoSlice.reducer;
