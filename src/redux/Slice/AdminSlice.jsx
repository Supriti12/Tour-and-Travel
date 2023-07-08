import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const initialState = {
  loading: false,
  user: [],
  token: "null"
}

export const register = createAsyncThunk("signup", async (data) => {

  const ress = await axios.post("http://127.0.0.1:3005/register", data);
  return ress?.data
});

export const loginRequest1 = createAsyncThunk("login", async () => {
  const res = await axios.get("http://127.0.0.1:3005/register");
  return res?.data;
}
);

export const AdminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {



  },

  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.token = payload
      localStorage.setItem("token", JSON.stringify(state.token));
      localStorage.setItem("Auth", JSON.stringify(state.user));


    },
    [register.rejected]: (state, { payload }) => {
      state.loading = false

    },

    //login
    [loginRequest1.pending]: (state, action) => {
      state.loading = true;
    },
    [loginRequest1.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.user = payload
      // state.token = payload
      // localStorage.setItem("token", JSON.stringify(state.token));
      // localStorage.setItem("Auth", JSON.stringify(state.user));

    }

  },
  [loginRequest1.rejected]: (state, action) => {
    state.loading = false;

  },
},
)


export default AdminSlice.reducer