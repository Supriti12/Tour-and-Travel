import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const BaseUrl="http://127.0.0.1:3015/booking"
export const Fetchdata = createAsyncThunk("fetch", async () => {

        let res = await axios.get(BaseUrl);
        
        return res?.data;

    })
export const Addbooking =  async (user) => {
        let res = await axios.post(BaseUrl,user);
        
        return res?.data;
    } 
    export const Editbooking = async(user) => {
            const res= await axios.get(`${BaseUrl}/${user}`)
            return res
    }
    
    export const Updatebooking = async (id,user) => {
           const res= await axios.put(`${BaseUrl}/${id}`,user)
           return res

    }
    
    export const Deletebooking = async id => {
            await axios.delete(`${BaseUrl}/${id}`)
    
    }
const initialState = ({
    
    A_data:null,
     isLoading:false
})

export const BookSlice = createSlice({
    name: "booking",
    initialState,
    reducer: {},
    extraReducers: {
        [Fetchdata.pending]: (state) => {
            state.isLoading=false
        
        },
        [Fetchdata.fulfilled]: (state, { payload }) => {
            state.isLoading = true
            state.A_data = payload;
            localStorage.setItem("Data",JSON.stringify(payload))
        },
        [Fetchdata.rejected]: (state) => {
            state.isLoading = false
        },

    },

})
export default BookSlice.reducer