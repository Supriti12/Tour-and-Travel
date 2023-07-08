import {createAsyncThunk,createSlice}from '@reduxjs/toolkit'
//import axiosInstance from '../Api/apiUrl'
import axios from 'axios';

export const fetchTest=createAsyncThunk("test/fetch",async()=>{
  
      const res= await axios.get('http://localhost:3006/testimonials');
      return res?.data;

})

const initialState=({
isloading:false,
isError:false,
test_data:[]
})


const TestimonialSlice=createSlice({
    name:'test',
    initialState,

    extraReducers:{
        [fetchTest.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.test_data = payload;
        },
        [fetchTest.pending]:(state)=>{
            state.isloading=false
        },
        [fetchTest.rejected]: (state) => {
            state.status = "rejected";
        }
    }

})

export default TestimonialSlice.reducer