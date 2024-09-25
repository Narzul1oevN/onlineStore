import { configureStore } from '@reduxjs/toolkit';
import  ToDoSlice  from './../redusers/ToDoSlice';


export const store = configureStore({
  reducer: {
    ToDoSlice: ToDoSlice
  }
});
