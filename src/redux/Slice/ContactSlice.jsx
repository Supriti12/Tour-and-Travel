import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    C_data : [],
    isLoading: false,
    isError: false,
    status:null
}
const BaseUrl="http://127.0.0.1:3015/contact"
export const Fetchdata1 = createAsyncThunk("contact", async () => {

    let res = await axios.get(BaseUrl);
    
    return res?.data;

})

export const AddContactdata =async  (data) => {
    const res = await axios.post(BaseUrl,data); 
    return res?.data;
    
}
export const DeleteContact = async id => {
    await axios.delete(`${BaseUrl}/${id}`)

}

const ContactSlice=createSlice({
    name:"contact",
    initialState,
    extraReducers:{
        [Fetchdata1.pending]: (state)=>{
            state.isLoading=false
        },
        [Fetchdata1.fulfilled]: (state, {payload})=>{
            state.isLoading=true
            state.C_data=payload
            state.status=payload
    
        },
        [Fetchdata1.rejected]: (state)=>{
         state.isError= true
        }
    }
})

export default ContactSlice.reducer