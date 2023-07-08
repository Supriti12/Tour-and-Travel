import {createAsyncThunk,createSlice}from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchAbout=createAsyncThunk("about/fetch",async()=>{
  
      const res= await axios.get('http://localhost:3004/about');
      return res?.data;

})

const initialState=({
isloading:false,
isError:false,
about_data:[]
})


const AboutSlice=createSlice({
    name:'banner',
    initialState,

    extraReducers:{
        [fetchAbout.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.about_data = payload;
        },
        [fetchAbout.pending]:(state)=>{
            state.status="loading......"
            
        },
        [fetchAbout.rejected]: (state) => {
            state.status = "rejected";
        }
    }

})

export default AboutSlice.reducer