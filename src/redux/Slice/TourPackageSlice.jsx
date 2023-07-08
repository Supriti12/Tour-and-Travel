import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    pack:null,
    isloading:false,
    isError:false,
    packfilterData:[],
    priceCatagory:[],
    dayCatagory:[]
}
export const tourdata=createAsyncThunk('tour',async()=>{
    const res=await axios.get('http://127.0.0.1:3009/tourPackage')
    console.log(res?.data);
    return res?.data;
})
const TourPackageSlice=createSlice({
    name:"tour",
    initialState,
    reducers: {
        packfilterAction(state,action){
            state.packfilterData=action.payload;
            state.pack = action.payload
        }
    },
    extraReducers:{
        [tourdata.pending]:(state)=>{
            state.isloading=true
        },
        [tourdata.fulfilled]:(state,{payload})=>{
            state.isloading=false
            state.pack=payload
            state.priceCatagory=payload
            state.dayCatagory=payload
        },
        [tourdata.rejected]:(state)=>{
            state.isError=true;
        }
    }
})
export const {packfilterAction}=TourPackageSlice.actions;
export default TourPackageSlice.reducer
