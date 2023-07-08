import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    location:null,
    isloading:true,
    isError:false,
    desfilterData:[],
    desAllData:[],
    dtlsAllData:[]
}
export const dtlsdata=createAsyncThunk('dtlsdata',async(id)=>{
    const res=await axios.get(`http://127.0.0.1:3007/destinations/${id}{id}`)
    console.log(res?.data);
    return res?.data;
})
export const desdata=createAsyncThunk('desdata',async(id)=>{
    const res=await axios.get(`http://127.0.0.1:3007/destinations/${id}`)
    console.log(res?.data);
    return res?.data;
})
export const desTdata=createAsyncThunk('desTdata',async()=>{
    const res=await axios.get(`http://127.0.0.1:3007/destinations`)
    console.log(res?.data);
    return res?.data;
})
const DestinationSlice=createSlice({
    name:"desdata",
    initialState,
    reducers: {
        desfilterAction(state,action){
            state.desfilterData=action.payload;
            state.dest = action.payload
        }
    },
    extraReducers:{
        [desdata.pending]:(state)=>{
            state.isloading=true
        },
        [desdata.fulfilled]:(state,{payload})=>{
            state.isloading=false
            state.desfilterData=payload
        },
        [desdata.rejected]:(state)=>{
            state.isError=true;
        },
        [desTdata.pending]:(state)=>{
            state.isloading=true
        },
        [desTdata.fulfilled]:(state,{payload})=>{
            state.isloading=false
            state.desAllData=payload
         
        },
        [desTdata.rejected]:(state)=>{
            state.isError=true;
        },
        [dtlsdata.pending]:(state)=>{
            state.isloading=true
        },
        [dtlsdata.fulfilled]:(state,{payload})=>{
            state.isloading=false
            state.desAllData=payload
            
        },
        [dtlsdata.rejected]:(state)=>{
            state.isError=true;
        }
    }
})
export default DestinationSlice
