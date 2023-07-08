import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    post:null,
    isloading:false,
    isError:false,
    filteredData:[],
    catagoryData : [],
    latestData:[],
    tagData:[]
}
export const Apifetch=createAsyncThunk('blog',async()=>{
    const res=await axios.get("http://127.0.0.1:3009/blogdata");
    return res?.data;
})
const BlogSlice=createSlice({
    name:"blog",
    initialState,
    reducers: {
        filteredAction(state,action){
            state.filteredData=action.payload;
            state.post = action.payload
        }
    },
    extraReducers:{
        [Apifetch.pending]:(state)=>{
            state.isloading=true
        },
        [Apifetch.fulfilled]:(state,{payload})=>{
            state.isloading=false
            state.post=payload
            state.catagoryData = payload
            state.tagData=payload
            state.latestData=payload
            localStorage.setItem("post",JSON.stringify(payload))
        },
        [Apifetch.rejected]:(state)=>{
            state.isError=true;
        }
    }
})
export const {filteredAction}=BlogSlice.actions;
export default BlogSlice.reducer
